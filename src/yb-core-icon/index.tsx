import React, { FC } from 'react';
import { YbCoreIconProps } from './YbCoreIcon.type';
import { useCacheInvalidate } from './CacheService';
import Icons from './iconIndex';

const baseUrl = 'https://www.svgrepo.com/download/'

const YbCoreIcon: FC<YbCoreIconProps> = props => {
  const {
    name,
    width,
    height,
    color,
    disableFetching = false,
    forcedConversion = true,
    placeholder = <></>,
    loadingPlaceholder = <></>,
    customUrl,
    invalidateCacheInDays = 2,
    disableCache = false,
  } = props;

  useCacheInvalidate(invalidateCacheInDays)

  const iconName = name ?? ''
  const Icon = Icons[iconName]?.uri

  if (Icon !== undefined) {
    let widthProps = {}, heightProps = {}

    if (width !== undefined) {
      widthProps = { width: width }
    }

    if (height !== undefined) {
      heightProps = { height: height }
    }

    const IconComponent = Icon.default
    return <IconComponent
      color={color}
      {...widthProps}
      {...heightProps}
    />
  } else {
    if (customUrl === undefined) {
      console.warn('Icon not present within the component. Attempting the fetch the Icon from server or cache. \n Please update the component to latest version.')
    }
    const SvgUri = require('./SvgUri').default;

    return <SvgUri
      props={{
        color: color,
        placeholder: placeholder,
        loadingPlaceholder: loadingPlaceholder,
        forcedConversion: forcedConversion,
        url: customUrl ?? (baseUrl + name),
        disableCache: disableCache,
        disableFetching: disableFetching
      }}
      overrideProps={{
        width: (width ?? 24),
        height: (height ?? 24),
      }}
    />
  }
};

export default YbCoreIcon;
