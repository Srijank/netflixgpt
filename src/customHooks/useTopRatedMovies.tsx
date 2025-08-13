import { API_OPTION } from "@/utils/const";
import { addTopRatedMovies } from "@/utils/movieSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
	const dispatch = useDispatch();
	const getmoviesInfo = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
			API_OPTION
		);
		const toprated = await data.json();
		dispatch(addTopRatedMovies(toprated.results));
		console.log("Movies fetched:Top rated ", toprated.results);
	};

	useEffect(() => {
		getmoviesInfo();
	}, []);
};

export default useTopRatedMovies;
