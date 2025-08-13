import { API_OPTION } from "@/utils/const";
import { addPopularMovies } from "@/utils/movieSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
	const dispatch = useDispatch();
	const getmoviesInfo = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
			API_OPTION
		);
		const popularmovies = await data.json();
		dispatch(addPopularMovies(popularmovies.results));
		console.log("Movies fetched:POpular ", popularmovies.results);
	};

	useEffect(() => {
		getmoviesInfo();
	}, []);
};

export default usePopularMovies;
