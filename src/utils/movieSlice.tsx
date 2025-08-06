import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: {
		movies: null,
		trailers: null,
	},
	reducers: {
		addMovies: (state, action) => {
			state.movies = action.payload;
		},
		addTrailer: (state, action) => {
			state.trailers = action.payload;
		},
	},
});
export default movieSlice.reducer;
export const { addMovies, addTrailer } = movieSlice.actions;
