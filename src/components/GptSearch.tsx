import { BG_PIC } from "@/utils/const";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import OpenAI from "openai";

const GptSearch = () => {
	const [query, setQuery] = useState("");
	const handleGPTSearch = async () => {
		if (!query) return;
		try {
			const res = await fetch("/api/gpt-search", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query }),
			});
			const data = await res.json();
			console.log(data.result);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className="relative w-full min-h-screen">
			<Image
				src={BG_PIC}
				alt="background"
				fill
				className="opacity-30"
			/>

			<div className="absolute inset-0 flex items-center justify-center gap-2 z-50 md:mt-[5%] mt-[20%]">
				<input
					type="text"
					placeholder="Search with GPT..."
					value={query}
					className="p-2 m-4 rounded-md  w-1/2 bg-gray-800 text-white  "
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					className="rounded-lg button bg-purple-700 text-white md:px-4 md:py-4 md:pt-2 md:pb-2  p-2 cursor-pointer "
					onClick={handleGPTSearch}>
					Search
				</button>
			</div>
		</div>
	);
};

export default GptSearch;
