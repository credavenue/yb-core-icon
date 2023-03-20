import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
function SvgAlarmMinus(props) {
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
				d="M5.63604 6.63604C7.32387 4.94821 9.61305 4 12 4C14.3869 4 16.6761 4.94821 18.364 6.63604C20.0518 8.32387 21 10.6131 21 13C21 15.3869 20.0518 17.6761 18.364 19.364C16.6761 21.0518 14.3869 22 12 22C9.61305 22 7.32387 21.0518 5.63604 19.364C3.94821 17.6761 3 15.3869 3 13C3 10.6131 3.94821 8.32387 5.63604 6.63604ZM12 6C10.1435 6 8.36301 6.7375 7.05025 8.05025C5.7375 9.36301 5 11.1435 5 13C5 14.8565 5.7375 16.637 7.05025 17.9497C8.36301 19.2625 10.1435 20 12 20C13.8565 20 15.637 19.2625 16.9497 17.9497C18.2625 16.637 19 14.8565 19 13C19 11.1435 18.2625 9.36301 16.9497 8.05025C15.637 6.7375 13.8565 6 12 6Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.70711 2.29289C6.09763 2.68342 6.09763 3.31658 5.70711 3.70711L2.70711 6.70711C2.31658 7.09763 1.68342 7.09763 1.29289 6.70711C0.902369 6.31658 0.902369 5.68342 1.29289 5.29289L4.29289 2.29289C4.68342 1.90237 5.31658 1.90237 5.70711 2.29289Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.2929 2.29289C18.6834 1.90237 19.3166 1.90237 19.7071 2.29289L22.7071 5.29289C23.0976 5.68342 23.0976 6.31658 22.7071 6.70711C22.3166 7.09763 21.6834 7.09763 21.2929 6.70711L18.2929 3.70711C17.9024 3.31658 17.9024 2.68342 18.2929 2.29289Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.70711 18.2929C7.09763 18.6834 7.09763 19.3166 6.70711 19.7071L4.70711 21.7071C4.31658 22.0976 3.68342 22.0976 3.29289 21.7071C2.90237 21.3166 2.90237 20.6834 3.29289 20.2929L5.29289 18.2929C5.68342 17.9024 6.31658 17.9024 6.70711 18.2929Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.2929 18.2929C17.6834 17.9024 18.3166 17.9024 18.7071 18.2929L20.7071 20.2929C21.0976 20.6834 21.0976 21.3166 20.7071 21.7071C20.3166 22.0976 19.6834 22.0976 19.2929 21.7071L17.2929 19.7071C16.9024 19.3166 16.9024 18.6834 17.2929 18.2929Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13Z"
				fill={props.color ?? '#344054'}
			/>
		</Svg>
	);
}
export default SvgAlarmMinus;