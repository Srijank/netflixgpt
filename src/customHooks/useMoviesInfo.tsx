import { API_OPTION } from "@/utils/const";
import { addMovies } from "@/utils/movieSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useMoviesInfo = () => {
	const dispatch = useDispatch();
	const getmoviesInfo = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
			API_OPTION
		);
		const movies = await data.json();
		dispatch(addMovies(movies.results));
		console.log("Movies fetched:", movies.results);
	};

	useEffect(() => {
		getmoviesInfo();
	}, []);
};

export default useMoviesInfo;
