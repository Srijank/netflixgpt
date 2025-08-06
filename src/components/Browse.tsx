import React from "react";
import Header from "./Header";
import useLogginCheck from "@/customHooks/useLogginCheck";
import MainContainer from "./MainContainer";
import useMoviesInfo from "@/customHooks/useMoviesInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/appStore";
import { Movie, Trailer } from "@/utils/type";
const Browse = () => {
	useLogginCheck();
	useMoviesInfo();
	const { movies } = useSelector((store: RootState) => store.movies);
	return (
		<div>
			<Header />
			<MainContainer movies={movies} />
			{/* <SecondContainer /> */}
		</div>
	);
};

export default Browse;
