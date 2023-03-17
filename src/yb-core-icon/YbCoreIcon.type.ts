import { ReactElement } from 'react';
import { ColorValue } from 'react-native';

export interface BasicIconProps {
  width?      : string | number;
  height?     : string | number;
  color?      : ColorValue;
  customUrl?  : string;
}

export interface SvgUriProps extends BasicIconProps {
  url                 : string;
  placeholder?        : ReactElement;
  loadingPlaceholder? : ReactElement;
  forcedConversion?   : boolean;
  disableCache?       : boolean;
  disableFetching?    : boolean;
 }

export interface YbCoreIconProps extends BasicIconProps {
  readonly name?                  : string;
  readonly forcedConversion?      : boolean;
  readonly disableCache?          : boolean;
  readonly disableFetching?       : boolean;
  readonly placeholder?           : ReactElement;
  readonly loadingPlaceholder?    : ReactElement;
  readonly invalidateCacheInDays? : number;
}
