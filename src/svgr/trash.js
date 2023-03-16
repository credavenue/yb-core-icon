import * as React from "react";
import Svg, { Path } from "react-native-svg";
function SvgTrash(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill={props.color ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33301 4.00016C1.33301 3.63197 1.63148 3.3335 1.99967 3.3335H13.9997C14.3679 3.3335 14.6663 3.63197 14.6663 4.00016C14.6663 4.36835 14.3679 4.66683 13.9997 4.66683H1.99967C1.63148 4.66683 1.33301 4.36835 1.33301 4.00016Z"
        fill={props.color ?? "#101828"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66699 1.99984C6.49018 1.99984 6.32061 2.07007 6.19559 2.1951C6.07056 2.32012 6.00033 2.48969 6.00033 2.6665V3.33317H10.0003V2.6665C10.0003 2.48969 9.93009 2.32012 9.80506 2.1951C9.68004 2.07007 9.51047 1.99984 9.33366 1.99984H6.66699ZM11.3337 3.33317V2.6665C11.3337 2.13607 11.1229 1.62736 10.7479 1.25229C10.3728 0.877218 9.86409 0.666504 9.33366 0.666504H6.66699C6.13656 0.666504 5.62785 0.877218 5.25278 1.25229C4.87771 1.62736 4.66699 2.13607 4.66699 2.6665V3.33317H3.33366C2.96547 3.33317 2.66699 3.63165 2.66699 3.99984V13.3332C2.66699 13.8636 2.87771 14.3723 3.25278 14.7474C3.62785 15.1225 4.13656 15.3332 4.66699 15.3332H11.3337C11.8641 15.3332 12.3728 15.1225 12.7479 14.7474C13.1229 14.3723 13.3337 13.8636 13.3337 13.3332V3.99984C13.3337 3.63165 13.0352 3.33317 12.667 3.33317H11.3337ZM4.00033 4.6665V13.3332C4.00033 13.51 4.07056 13.6795 4.19559 13.8046C4.32061 13.9296 4.49018 13.9998 4.66699 13.9998H11.3337C11.5105 13.9998 11.68 13.9296 11.8051 13.8046C11.9301 13.6795 12.0003 13.51 12.0003 13.3332V4.6665H4.00033Z"
        fill={props.color ?? "#101828"}
      />
    </Svg>
  );
}
export default SvgTrash;
