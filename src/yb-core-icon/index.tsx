import React, { FC } from 'react';
import { YbCoreIconProps } from './YbCoreIcon.type';
import Icons from './iconIndex';
import { useCacheInvalidate } from './CacheService';

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

  let Icon = Icons[name ?? '']

  if (Icon === undefined) {
    console.warn('Icon not present within the component. Attempting the fetch the Icon from server. \n Please update the component to latest version.')
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
  } else {

    let widthProps = {}, heightProps = {}

    if (width !== undefined) {
      widthProps = { width: width }
    }

    if (height !== undefined) {
      heightProps = { height: height }
    }

    return <Icon color={color} {...widthProps} {...heightProps} />
  }
};

export default YbCoreIcon;
