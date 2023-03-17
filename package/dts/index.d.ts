import { ReactElement, FC } from 'react';
import { ColorValue } from 'react-native';

interface BasicIconProps {
    width?: string | number;
    height?: string | number;
    color?: ColorValue;
    customUrl?: string;
}
interface YbCoreIconProps extends BasicIconProps {
    readonly name?: string;
    readonly forcedConversion?: boolean;
    readonly disableCache?: boolean;
    readonly disableFetching?: boolean;
    readonly placeholder?: ReactElement;
    readonly loadingPlaceholder?: ReactElement;
    readonly invalidateCacheInDays?: number;
}

declare const YbCoreIcon: FC<YbCoreIconProps>;

export { YbCoreIcon as default };
