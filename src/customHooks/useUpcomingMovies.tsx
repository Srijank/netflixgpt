import { API_OPTION } from "@/utils/const";
import { addUpcomingMovies } from "@/utils/movieSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
	const dispatch = useDispatch();
	const getmoviesInfo = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
			API_OPTION
		);
		const upcomingmovies = await data.json();
		dispatch(addUpcomingMovies(upcomingmovies.results));
		console.log("Movies fetched:Upcoming", upcomingmovies.results);
	};

	useEffect(() => {
		getmoviesInfo();
	}, []);
};

export default useUpcomingMovies;
