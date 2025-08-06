// import Body from "@/components/Body";
// import { Provider } from "react-redux";
// import appStore from "@/utils/appStore";
"use client";

import Browse from "@/components/Browse";
import appStore from "@/utils/appStore";
import { Provider } from "react-redux";

export default function Home() {
	return (
		<div className="bg-black text-white min-h-screen">
			<Browse />
		</div>
	);
}
