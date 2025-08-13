import { API_OPTION } from "@/utils/const";
import { addNowPlayingMovies } from "@/utils/movieSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useNowPlayingMoviesInfo = () => {
	const dispatch = useDispatch();
	const getmoviesInfo = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
			API_OPTION
		);
		const nowplayingmovies = await data.json();
		dispatch(addNowPlayingMovies(nowplayingmovies.results));
		console.log("Movies fetched:", nowplayingmovies.results);
	};

	useEffect(() => {
		getmoviesInfo();
	}, []);
};

export default useNowPlayingMoviesInfo;
