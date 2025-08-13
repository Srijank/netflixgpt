import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: {
		nowplayingmovies: null,
		trailers: null,
		popularmovies: null,
		topratedmovies: null,
		upcomingmovies: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowplayingmovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularmovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topratedmovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingmovies = action.payload;
		},
		addTrailer: (state, action) => {
			state.trailers = action.payload;
		},
	},
});
export default movieSlice.reducer;
export const {
	addNowPlayingMovies,
	addTrailer,
	addPopularMovies,
	addTopRatedMovies,
	addUpcomingMovies,
} = movieSlice.actions;
