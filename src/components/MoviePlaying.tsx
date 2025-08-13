import { RootState } from "@/utils/appStore";
import { Movie } from "@/utils/type";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
export type title = String | null;
const MoviePlaying = ({ title }: { title: title }) => {
	let movies: Movie[] | null = [];
	if (title === "Now Playing") {
		movies = useSelector((store: RootState) => store.movies.nowplayingmovies);
	} else if (title === "Popular") {
		movies = useSelector((store: RootState) => store.movies.popularmovies);
	} else if (title === "Top Rated") {
		movies = useSelector((store: RootState) => store.movies.topratedmovies);
	} else if (title === "Upcoming") {
		movies = useSelector((store: RootState) => store.movies.upcomingmovies);
	}
	return (
		<div>
			<p className="text-white  font-bold text-2xl p-2 pb-1 mx-8">{title}</p>
			<div className="max-w-screen  overflow-x-hidden ">
				<div className="flex flex-nowrap space-x-10  pt-2 px-10 ">
					{movies === null ? (
						<p className="text-white">No movies are currently playing.</p>
					) : (
						movies.map((movie) => (
							<div
								key={movie.id}
								className="m-2 flex-shrink-0 ">
								<Image
									src={
										`https://image.tmdb.org/t/p/w440_and_h660_face` +
										movie.poster_path
									}
									alt={movie.title}
									width={40}
									height={60}
									unoptimized
									className="w-40 h-60 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
								/>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default MoviePlaying;
