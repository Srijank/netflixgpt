import { Movie } from "@/utils/type";
import React from "react";
import MoviePlaying from "./MoviePlaying";
import usePopularMovies from "@/customHooks/usePopularMovies";

// interface SecondContainerProps {
// 	nowplayingmovies: Movie[] | null;
// }
const SecondContainer = () => {
	return (
		<div className="bg-black absolute pt-10">
			<div className="-mt-52 z-20 pl-10">
				<MoviePlaying title="Now Playing" />
				<MoviePlaying title="Upcoming" />
				<MoviePlaying title="Top Rated" />
				<MoviePlaying title="Popular" />
			</div>
		</div>
	);
};

export default SecondContainer;
