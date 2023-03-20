import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
function SvgBr(props) {
	return (
		<Svg
			fill={props.color ?? '#000000'}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="800px"
			height="800px"
			viewBox="0 0 512 512"
			enableBackground="new 0 0 512 512"
			xmlSpace="preserve"
			{...props}
		>
			<G id="2069a460dcf28295e231f3111e030f8f">
				<Path
					display="inline"
					d="M170.218,233.195h-22.805v-66.607c4.708-1.085,12.309-1.809,25.342-1.809 c28.232,0,45.607,10.5,45.607,33.306C218.361,218.715,200.987,233.195,170.218,233.195z M169.494,265.772h-22.082v79.64 c5.793,0.724,13.395,1.086,23.529,1.086c28.598,0,53.936-10.862,53.936-40.907C224.877,277.358,200.263,265.772,169.494,265.772z  M511.5,85.667v340.667c0,46.842-38.325,85.167-85.167,85.167H85.667C38.825,511.5,0.5,473.175,0.5,426.333V85.667 C0.5,38.825,38.825,0.5,85.667,0.5h340.667C473.175,0.5,511.5,38.825,511.5,85.667z M271.936,307.042 c0-33.668-23.529-53.937-49.229-60.453v-0.724c26.423-9.777,40.541-30.407,40.541-52.851c0-20.635-10.134-36.562-25.338-45.611 c-16.65-11.586-36.923-15.565-69.863-15.565c-24.976,0-50.68,2.171-64.794,5.069v239.997c11.22,1.447,30.042,3.256,54.66,3.256 c44.521,0,73.12-7.602,90.494-22.806C262.524,345.774,271.936,328.758,271.936,307.042z M408.747,198.446 c-3.618-0.728-6.155-1.089-10.496-1.089c-18.826,0-39.456,12.671-48.144,37.647h-1.451l-1.447-33.663h-38.732 c1.085,15.927,1.447,32.939,1.447,56.831v119.458h44.525v-91.222c0-5.069,0.724-9.772,1.447-13.757 c3.983-19.907,18.464-33.663,39.817-33.663c5.432,0,9.415,0.724,13.033,1.447V198.446z"
				/>
			</G>
		</Svg>
	);
}
export default SvgBr;
