import { useState, useEffect } from "react";
import { Platform } from "react-native";
import { UriProps } from "react-native-svg";
import { getData, storeData } from "./CacheService";
import { err, fetchText, rawSVGColorModify } from "./Utils";
import { SvgUriProps } from "./YbCoreIcon.type";

interface Props {
  props: SvgUriProps,
  overrideProps: UriProps
}

function SvgUri(customProps: Props) {
  const { props, overrideProps } = customProps
  const { onError = err, onLoad, width, height } = overrideProps;
  const { placeholder, loadingPlaceholder, forcedConversion = false, url, color, disableCache = false, disableFetching = false } = props;
  const [xml, setXml] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchFromServer = () => {
      if (disableFetching) {
        setXml(null)
        return
      }
      if (url !== null) {
        fetchText(url)
          .then(async (data) => {
            setLoading(false)
            if (data.includes("404 Not Found")) {
              setXml(null)
            } else {
              if (!disableCache) {
                storeData(url, data)
              }
              setXml(data);
              onLoad?.();
            }
          })
          .catch((err) => {
            setLoading(false)
            onError(err)
          })
      } else {
        setLoading(false)
        setXml(null);
      }
    }
    if (disableCache) {
      fetchFromServer()
    } else {
      getData(url ?? '').then((cachedImage) => {
        if (cachedImage !== null) {
          setLoading(false)
          setXml(cachedImage)
        } else {
          fetchFromServer()
        }
      }, (reason) => {
        console.log('Cache failed to retrive. Reason: ', reason)
        console.log('Fetching From Server...')
        fetchFromServer()
      })
    }
  }, [onError, url, onLoad, disableCache, disableFetching]);

  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    const { SvgXml } = require("react-native-svg");
    if (isLoading) {
      return loadingPlaceholder ?? placeholder
    } else if (!isLoading && xml === null) {
      return placeholder
    } else {
      const xmlValue = forcedConversion ? rawSVGColorModify(xml!, color?.toString()) : xml!
      const colorPropsAdditions = forcedConversion ? {} : { color: color?.toString() }
      return <SvgXml xml={xmlValue} {...colorPropsAdditions} override={overrideProps} />
    }
  } else {

    const { domSVGColorModify } = require("./Utils")

    if (isLoading) {
      return loadingPlaceholder ?? placeholder
    } else if (!isLoading && xml === null) {
      return placeholder
    } else {
      const xmlValue = forcedConversion ? domSVGColorModify(xml!, color?.toString()) : xml!
      const dataUri = `data:image/svg+xml,${encodeURIComponent(xmlValue)}`;
      const colorPropsAdditions = forcedConversion ? {} : { color: color?.toString() }
      return <img src={dataUri} alt="SVG" style={{ width: width, height: height }} {...colorPropsAdditions} />
    }
  }
}

export default SvgUri