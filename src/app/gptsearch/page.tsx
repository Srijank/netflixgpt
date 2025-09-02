// import Body from "@/components/Body";
// import { Provider } from "react-redux";
// import appStore from "@/utils/appStore";
"use client";

import GptSearch from "@/components/GptSearch";
import Header from "@/components/Header";

export default function Home() {
	return (
		<div className="bg-black text-white min-h-screen">
			<Header />
			<GptSearch />
		</div>
	);
}
