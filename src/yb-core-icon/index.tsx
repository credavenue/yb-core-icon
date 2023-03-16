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
  } = props;

  useCacheInvalidate(invalidateCacheInDays)

  let Icon = Icons[name ?? '']

  if (Icon === undefined) {

    if (disableFetching) {
      return placeholder
    }

    const SvgUri = require('./SvgUri').default;
    return <SvgUri
      props={{
        color: color,
        placeholder: placeholder,
        loadingPlaceholder: loadingPlaceholder,
        forcedConversion: forcedConversion,
        url: customUrl ?? (baseUrl + name),
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
