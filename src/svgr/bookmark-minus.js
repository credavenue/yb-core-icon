import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
function SvgBookmarkMinus(props) {
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
				d="M7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V19.2768L11.5039 16.1318C11.8113 15.9561 12.1887 15.9561 12.4961 16.1318L18 19.2768V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H7ZM4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V21C20 21.3565 19.8102 21.686 19.5019 21.8649C19.1936 22.0438 18.8134 22.0451 18.5039 21.8682L12 18.1518L5.49614 21.8682C5.18664 22.0451 4.80639 22.0438 4.49807 21.8649C4.18976 21.686 4 21.3565 4 21V5C4 4.20435 4.31607 3.44129 4.87868 2.87868Z"
				fill={props.color ?? '#344054'}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 10C8 9.44772 8.44772 9 9 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H9C8.44772 11 8 10.5523 8 10Z"
				fill={props.color ?? '#344054'}
			/>
		</Svg>
	);
}
export default SvgBookmarkMinus;
