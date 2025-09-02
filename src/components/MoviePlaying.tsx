import { RootState } from "@/utils/appStore";
import { Movie } from "@/utils/type";
import Image from "next/image";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type title = string | null;

const MoviePlaying = ({ title }: { title: title }) => {
	const rowRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (rowRef.current) {
			const { clientWidth, scrollLeft } = rowRef.current;
			const scrollTo =
				direction === "left"
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;
			rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
		}
	};

	const nowPlayingMovies = useSelector(
		(store: RootState) => store.movies.nowplayingmovies
	);
	const popularMovies = useSelector(
		(store: RootState) => store.movies.popularmovies
	);
	const topRatedMovies = useSelector(
		(store: RootState) => store.movies.topratedmovies
	);
	const upcomingMovies = useSelector(
		(store: RootState) => store.movies.upcomingmovies
	);

	let movies: Movie[] | null = [];
	if (title === "Now Playing") {
		movies = nowPlayingMovies;
	} else if (title === "Popular") {
		movies = popularMovies;
	} else if (title === "Top Rated") {
		movies = topRatedMovies;
	} else if (title === "Upcoming") {
		movies = upcomingMovies;
	}

	return (
		<div className="relative overflow-hidden">
			{/* Section title */}
			<p className="text-white font-bold md:text-2xl text-xl p-2 pb-1 md:mx-8 mt-5 mb-5">
				{title}
			</p>

			{/* Left Arrow */}
			<button
				onClick={() => scroll("left")}
				className="hidden md:flex absolute left-2 top-[60%] -translate-y-1/2 z-10 
                   bg-black/50 p-2 rounded-full hover:bg-black/80 transition cursor-pointer">
				<ChevronLeft className="text-white w-6 h-6" />
			</button>

			{/* Movie Row */}
			<div
				ref={rowRef}
				className="flex overflow-x-scroll no-scrollbar scroll-smooth space-x-4 
                   touch-pan-x snap-x snap-mandatory mx-10">
				{movies && movies.length > 0 ? (
					movies.map((movie) => (
						<div
							key={movie.id}
							className="flex-shrink-0 snap-center">
							<Image
								src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
								alt={movie.title}
								width={160}
								height={240}
								unoptimized
								className="w-40 h-60 object-cover rounded-lg shadow-lg 
                           hover:scale-105 transition-transform duration-300"
							/>
						</div>
					))
				) : (
					<p className="text-white">No movies available.</p>
				)}
			</div>

			{/* Right Arrow */}
			<button
				onClick={() => scroll("right")}
				className="hidden md:flex absolute right-2 top-[60%] -translate-y-1/2 z-10 
                   bg-black/50 p-2 rounded-full hover:bg-black/80 transition cursor-pointer">
				<ChevronRight className="text-white w-6 h-6" />
			</button>
		</div>
	);
};

export default MoviePlaying;
