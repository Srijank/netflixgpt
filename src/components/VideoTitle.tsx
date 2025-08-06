import { Movie } from "@/utils/type";
import React from "react";
import PlayIcon from "@/utils/icons/PlayIcon";

export type videoContent = Movie[] | null;
const VideoTitle = ({ content }: { content: videoContent }) => {
	console.log("VideoTitle content:", content);
	return (
		<div className="bg-gradient-to-r from-black  font-bold text-white p-4 mx-20">
			<p className="mt-52 text-6xl my-10">{content?.[0]?.title}</p>
			<p className="text-lg mt-4 w-[45%]">{content?.[0]?.overview}</p>
			<button className="bg-white text-black px-4 py-2 mt-6 rounded-md w-40 hover:bg-gray-300 transition-colors flex items-center justify-center">
				<PlayIcon />
				<p className="mx-2"> Play</p>
			</button>
			<button className="bg-white text-black px-4 py-2 mt-6 rounded-md w-40 hover:bg-gray-300 transition-colors flex items-center justify-center">
				<PlayIcon />
				<p className="mx-2"> Play</p>
			</button>
		</div>
	);
};

export default VideoTitle;
