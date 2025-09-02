import { Trailer } from "@/utils/type";
import React from "react";
export type videos = Trailer[] | null;
const VideoContainer = ({ trailer }: { trailer: videos }) => {
	console.log("VideoContainer trailer:", trailer);
	return (
		<div>
			{!trailer || trailer.length === 0 ? (
				<p className="text-white text-center ">No trailer available</p>
			) : (
				<div>
					<div className=" w-screen aspect-video mx-0 md:mt-0  ">
						<iframe
							className="w-screen aspect-video"
							width="560"
							src={
								"https://www.youtube.com/embed/" +
								trailer[0]?.key +
								"?si=SG4vNNK5SPybHG7_&amp;controls=0&autoplay=1&mute=1&rel=0&modestbranding=1&loop=1 "
							}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen></iframe>
					</div>
				</div>
			)}
		</div>
	);
};

export default VideoContainer;
