import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
function SvgTrendingUp(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill={props.color ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1557_349)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8047 3.52858C16.0651 3.78892 16.0651 4.21103 15.8047 4.47138L9.47141 10.8047C9.21106 11.0651 8.78895 11.0651 8.5286 10.8047L5.66667 7.94279L1.13807 12.4714C0.877722 12.7317 0.455612 12.7317 0.195262 12.4714C-0.0650874 12.211 -0.0650874 11.7889 0.195262 11.5286L5.19526 6.52858C5.45561 6.26823 5.87772 6.26823 6.13807 6.52858L9 9.3905L14.8619 3.52858C15.1223 3.26823 15.5444 3.26823 15.8047 3.52858Z"
          fill={props.color ?? "#31643A"}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.667 4.00014C10.667 3.63195 10.9655 3.33348 11.3337 3.33348H15.3337C15.7018 3.33348 16.0003 3.63195 16.0003 4.00014V8.00014C16.0003 8.36833 15.7018 8.66681 15.3337 8.66681C14.9655 8.66681 14.667 8.36833 14.667 8.00014V4.66681H11.3337C10.9655 4.66681 10.667 4.36833 10.667 4.00014Z"
          fill={props.color ?? "#31643A"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1557_349">
          <Rect width={16} height={16} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgTrendingUp;
