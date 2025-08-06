import React from "react";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { Movie, Trailer } from "@/utils/type";

interface MainContainerProps {
	movies: Movie[] | null;
}
const MainContainer = ({ movies }: MainContainerProps) => {
	console.log("MainContainer movies:", movies);
	return (
		<div className="">
			<VideoTitle content={movies} />
			<VideoContainer />
		</div>
	);
};

export default MainContainer;
