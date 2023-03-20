import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
function SvgCircleSlashed(props) {
	return (
		<Svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill={props.color ?? 'none'}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.7071 1.29289C23.0976 1.68342 23.0976 2.31658 22.7071 2.70711L2.70711 22.7071C2.31658 23.0976 1.68342 23.0976 1.29289 22.7071C0.902369 22.3166 0.902369 21.6834 1.29289 21.2929L21.2929 1.29289C21.6834 0.902369 22.3166 0.902369 22.7071 1.29289Z"
				fill={props.color ?? '#344054'}
			/>
		</Svg>
	);
}
export default SvgCircleSlashed;