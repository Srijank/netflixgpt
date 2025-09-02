"use client";
import React, { useEffect, useState } from "react";
import { RootState } from "@/utils/appStore";
import Image from "next/image";
import { LOGO, profilepic } from "@/utils/const";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "lucide-react";
import { removeUser } from "@/utils/userSlice";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import path from "path";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const [profileToggle, setProfileToggle] = useState(false);
	const [query, setQuery] = useState("");
	const [search, setSearch] = useState(false);
	const [gptsearch, setGptSearch] = useState(true);
	const user = useSelector((store: RootState) => store.user);
	const dispatch = useDispatch();
	const router = useRouter(); // Check if user is logged out
	useEffect(() => {
		if (user === null) {
			router.push("/"); // Redirect to login page after logout
		}
	}, [user, router]);
	useEffect(() => {
		if (pathname === "/gptsearch") {
			setGptSearch(false);
		} else {
			setGptSearch(true);
		}
	}, [pathname]);

	const handleLogout = async () => {
		try {
			await signOut(auth); // <-- THIS IS THE KEY
			dispatch(removeUser());
			router.push("/"); // Redirect to login
		} catch (error) {
			console.error("Logout error:", error);
		}
	};
	const handleGPTSearch = () => {
		if (gptsearch) {
			setGptSearch(!gptsearch);
			router.push("/gptsearch");
		} else {
			setGptSearch(!gptsearch);
			router.push("/browse");
		}
	};

	return (
		<div className="absolute my-1 w-full flex  items-center p-4 bg-gradient-to-b from-gray-900 to-white-800 z-20">
			<Image
				src={LOGO}
				alt="logo"
				width={80}
				height={80}
				unoptimized
				className="m:w-48 m:h-20 m:mx-16 w-32 h-16 cursor-pointer object-contain"
			/>

			{/* {user && (
				<div className="flex  space-x-5">
					<p className="text-white">Home </p>
					<p className="text-white ">My list </p>
				</div>
			)} */}
			{user && (
				<div className="ml-auto mr-10 flex items-center gap-2">
					<button
						className="rounded-lg button bg-purple-700 text-white p-2 cursor-pointer hidden md:block"
						onClick={handleGPTSearch}>
						{gptsearch ? "Gpt Search" : "Home"}
					</button>
					<div
						className="
							 border border-gray-300
						  flex items-center rounded-md px-2 py-1 w-50 max-w-md md:ml-auto gap-0 ">
						<input
							type="text"
							placeholder="Search..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							onMouseOut={() => setSearch(false)}
							onSubmit={() => setSearch((prev) => !prev)}
							className="flex-grow outline-none px-2 text-white"
						/>

						<button
							onClick={() => {
								setSearch((prev) => !prev);
							}}>
							{/* Using Lucide's Search icon */}
							<Search className="w-5 h-5 text-white" />
						</button>
					</div>
				</div>
			)}
			{user && (
				<div>
					<button
						className="md:hidden text-white hover:bg-gray-700"
						onClick={() => setIsOpen(!isOpen)}>
						☰
					</button>
					<div
						className={`${
							isOpen ? "block" : "hidden"
						} md:flex w-full md:w-auto  md:mt-0`}>
						<Image
							src={profilepic}
							alt="profile"
							width={50}
							height={50}
							className=" md:inline-block px-2 py-1 rounded hidden"
						/>
						<button
							className="hidden md:flex items-center text-sm font-medium text-white hover:bg-gray-700 px-3 py-2 rounded"
							onClick={() => {
								setProfileToggle(!profileToggle);
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7 "
								/>
							</svg>
						</button>
					</div>
					<div
						className={`${
							profileToggle || isOpen ? "block absolute" : "hidden"
						}    flex flex-col md:mt-0 md:mx-2 mx-[-12%] text-red-400 bg-gradient-to-b from-gray-900 to-white-800 mt-3`}>
						<p
							className="font-bold p-1 hover:bg-gray-800 cursor-pointer md:text-[18px] text-[12px] text-center"
							onClick={handleLogout}>
							Logout
						</p>
						{isOpen && (
							<button
								className="rounded-lg button bg-purple-700 text-white p-2 cursor-pointer text-[12px]"
								onClick={handleGPTSearch}>
								Gpt search
							</button>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
