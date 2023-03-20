import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
function SvgArrowLeftRight(props) {
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
				d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L17.7071 11.7071C17.3166 12.0976 16.6834 12.0976 16.2929 11.7071C15.9024 11.3166 15.9024 10.6834 16.2929 10.2929L19.5858 7L16.2929 3.70711C15.9024 3.31658 15.9024 2.68342 16.2929 2.29289Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071L4.41421 17L7.70711 20.2929C8.09763 20.6834 8.09763 21.3166 7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L6.29289 12.2929C6.68342 11.9024 7.31658 11.9024 7.70711 12.2929Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 17C2 16.4477 2.44772 16 3 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H3C2.44772 18 2 17.5523 2 17Z"
				fill={props.color ?? '#344054'}
			/>
		</Svg>
	);
}
export default SvgArrowLeftRight;