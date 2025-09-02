import React, { useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
import { Movie, Trailer } from "@/utils/type";
import { API_OPTION } from "@/utils/const";
import { useDispatch } from "react-redux";
import { addTrailer } from "@/utils/movieSlice";

interface MainContainerProps {
	nowplayingmovies: Movie[] | null;
}
let trailers: Trailer[] | null = null;
const MainContainer = ({ nowplayingmovies }: MainContainerProps) => {
	const dispatch = useDispatch();
	const getTrailer = async () => {
		if (!nowplayingmovies || nowplayingmovies.length === 0) {
			return null;
		}
		//let randomIndex = Math.floor(Math.random() * nowplayingmovies.length);
		//const movieId = nowplayingmovies[randomIndex]?.id;
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/` +
				nowplayingmovies[0]?.id +
				`/videos?language=en-US`,
			API_OPTION
		);
		const data = await response.json();
		trailers = data.results || null;
		dispatch(addTrailer(trailers));
	};
	useEffect(() => {
		getTrailer();
	}, []);

	return (
		<div className="">
			<VideoTitle content={nowplayingmovies} />
			<VideoContainer trailer={trailers} />
		</div>
	);
};

export default MainContainer;
