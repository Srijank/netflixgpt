import React from "react";
import Header from "./Header";
import useLogginCheck from "@/customHooks/useLogginCheck";
import MainContainer from "./MainContainer";
import useNowPlayingMoviesInfo from "@/customHooks/useNowPlayingMoviesInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/appStore";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "@/customHooks/usePopularMovies";
import useTopRatedMovies from "@/customHooks/useTopRatedMovies";
import useUpcomingMovies from "@/customHooks/useUpcomingMovies";
const Browse = () => {
	useLogginCheck();
	useNowPlayingMoviesInfo();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	const { nowplayingmovies } = useSelector((store: RootState) => store.movies);
	return (
		<div className="bg-black">
			<Header />
			<MainContainer nowplayingmovies={nowplayingmovies} />
			<SecondContainer />
		</div>
	);
};

export default Browse;
