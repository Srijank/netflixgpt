"use client";
import React, { useEffect, useState } from "react";
import { RootState } from "@/utils/appStore";
import Image from "next/image";
import { LOGO, profilepic } from "@/utils/const";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "lucide-react";
import { removeUser } from "@/utils/userSlice";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [profileToggle, setProfileToggle] = useState(false);
	const [query, setQuery] = useState("");
	const [search, setSearch] = useState(false);
	const user = useSelector((store: RootState) => store.user);
	const dispatch = useDispatch();
	const router = useRouter(); // Check if user is logged out
	useEffect(() => {
		if (user === null) {
			router.push("/"); // Redirect to login page after logout
		}
	}, [user]);
	const handleLogout = async () => {
		try {
			await signOut(auth); // <-- THIS IS THE KEY
			dispatch(removeUser());
			router.push("/"); // Redirect to login
		} catch (error) {
			console.error("Logout error:", error);
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
				className="w-48 h-20 mx-16 "
			/>

			{user && (
				<div className="flex  space-x-5">
					<p className="text-white">Home </p>
					<p className="text-white ">My list </p>
				</div>
			)}
			{user && (
				<div
					className={`${
						search ? "border border-gray-300" : " "
					} flex items-center  rounded-md px-2 py-1 w-100 max-w-md ml-auto`}>
					{search && (
						<input
							type="text"
							placeholder="Search..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							onMouseOut={() => setSearch(false)}
							className="flex-grow outline-none px-2 text-white"
						/>
					)}
					<button
						onClick={() => {
							setSearch((prev) => !prev);
						}}
						className={`transition-all duration-300 ${
							search ? "mr-auto" : "ml-auto"
						} text-gray-500 hover:text-black `}>
						{/* Using Lucide's Search icon */}
						<Search className="w-5 h-5 text-white" />
					</button>
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
						} md:flex w-full md:w-auto mt-4 md:mt-0`}>
						<Image
							src={profilepic}
							alt="profile"
							width={50}
							height={50}
							className="block md:inline-block px-2 py-1 rounded"
						/>
						<button
							className="flex items-center text-sm font-medium text-white hover:bg-gray-700 px-3 py-2 rounded"
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
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
					<div
						className={`${
							profileToggle ? "block absolute" : "hidden"
						}    flex flex-col mt-4 md:mt-0 mx-2 text-red-400 bg-gray-500`}>
						<p
							className="font-bold p-2 hover:bg-gray-800 cursor-pointer"
							onClick={handleLogout}>
							Logout
						</p>
						<p className="font-bold p-2">Profile</p>
						<p className="font-bold p-2">My list</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
