import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
function SvgMicrosoft(props) {
	return (
		<Svg
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			fill={props.color ?? 'none'}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M4 4H11.5V11.5H4V4ZM12.5 4H20V11.5H12.5V4ZM4 12.5H11.5V20H4V12.5ZM12.5 12.5H20V20H12.5V12.5Z"
				fill={props.color ?? '#000000'}
			/>
		</Svg>
	);
}
export default SvgMicrosoft;
