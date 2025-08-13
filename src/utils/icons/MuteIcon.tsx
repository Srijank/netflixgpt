const MuteIcon = () => {
	return (
		<div className=" w-30 h-30 top-40 right-4 z-100">
			<svg
				id="icon-muted"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				className="block">
				<path
					d="M16.5 12c0-1.77-.77-3.36-2-4.47l1.42-1.42C18.14 7.58 19 9.71 19 12s-.86 4.42-2.08 5.88l-1.42-1.42c1.23-1.11 2-2.7 2-4.47z"
					fill="currentColor"></path>
				<path
					d="M3 9v6h4l5 4V5L7 9H3z"
					fill="currentColor"></path>
				<line
					x1="22"
					y1="2"
					x2="2"
					y2="22"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					className="block"></line>
			</svg>
		</div>
	);
};
export default MuteIcon;
