import { Movie } from "@/utils/type";
import React from "react";
import PlayIcon from "@/utils/icons/PlayIcon";
import Infoicon from "@/utils/icons/Infoicon";

export type videoContent = Movie[] | null;
const VideoTitle = ({ content }: { content: videoContent }) => {
	console.log("VideoTitle content:", content);
	return content === null || content.length === 0 ? (
		<p>No content available</p>
	) : (
		<div className="absolute aspect-video max-w-full bg-gradient-to-r from-black  font-bold text-white p-4 px-20  md:pt-70 pt-30">
			<p className=" md:text-6xl text-4xl my-10">{content?.[0]?.title}</p>
			<p className="md:text-lg mt-4 md:w-[45%] text-[14px] w-[100%]">
				{content?.[0]?.overview}
			</p>
			<div className="flex space-x-4 mt-6">
				<button className="bg-white text-black px-4 py-2 mt-6 rounded-md w-40 hover:bg-gray-400 transition-colors flex items-center justify-center cursor-pointer">
					<PlayIcon />
					<p className="mx-2"> Play</p>
				</button>
				<button className="bg-gray-400 text-white px-4 py-2 mt-6 rounded-md w-40 hover:bg-gray-600 transition-colors flex items-center justify-center cursor-pointer">
					<Infoicon />
					<p className="mx-2">More Info </p>
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
