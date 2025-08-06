"use client";
import React, { useEffect, useRef } from "react";
import { BG_PIC } from "@/utils/const";
import Image from "next/image";
import Header from "./Header";
import { useState } from "react";
import { checkValidate } from "@/utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/utils/userSlice";
import { RootState } from "@/utils/appStore";

const Login = () => {
	const router = useRouter();
	const [signBtnColor, setsignBtnColor] = useState("bg-red-500");
	const [isLogged, setIsLogged] = useState(true);
	const email = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const displayName = useRef<HTMLInputElement>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const dispatch = useDispatch();
	const user = useSelector((store: RootState) => store.user);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const delayRedirect = setTimeout(() => {
			if (user === undefined) {
				// Still waiting for auth state, do nothing
				return;
			}

			if (user === null) {
				router.push("/"); // Not logged in
			} else {
				router.push("/browse"); // Logged in
			}
			setIsLoading(false); // Set loading to false after checking auth state
		}, 1000); // Short delay for smooth UX

		return () => clearTimeout(delayRedirect);
	}, [user]);

	// Show loading only while user is undefined (auth still loading)
	if (user === undefined || isLoading) {
		return (
			<div className="flex justify-center items-center h-screen bg-black text-white">
				Loading...
			</div>
		);
	}
	const handleSubmit = () => {
		const message = checkValidate(
			email.current?.value ?? "",
			password.current?.value ?? ""
		);
		const profileName = displayName.current?.value ?? "Not Updated";
		setErrorMessage(message);
		if (message) return;
		// Handle login or signup logic here
		if (!isLogged) {
			createUserWithEmailAndPassword(
				auth,
				email.current?.value ?? "",
				password.current?.value ?? ""
			)
				.then((userCredential) => {
					// Update profile with display name
					updateProfile(userCredential.user, {
						displayName: profileName,
					})
						.then(() => {
							// Profile updated!
							dispatch(
								addUser({
									uid: userCredential.user.uid,
									email: userCredential.user.email ?? "",
									displayName: profileName ?? "Not Updated",
								})
							);
						})
						.catch((error) => {
							setErrorMessage(error.message);
							// An error occurred
						});
					const user = userCredential.user;
					router.push("/browse");
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
					// ..
				});
		} else {
			// Sign in logic
			signInWithEmailAndPassword(
				auth,
				email.current?.value ?? "",
				password.current?.value ?? ""
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					dispatch(
						addUser({
							uid: userCredential.user.uid,
							email: userCredential.user.email,
							displayName: userCredential.user.displayName,
						})
					);
					router.push("/browse");
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
					// ..
				});
		}
	};
	return (
		<div className="relative w-full min-h-screen">
			<Image
				src={BG_PIC}
				alt="background"
				fill
				//className="object-cover"
			/>
			<div className="absolute inset-0 bg-gray-950/65" />
			<Header />
			<div className="flex justify-center px-4">
				<form
					onSubmit={(e) => e.preventDefault()}
					className="text-white  bg-black/70 mx-auto right-0 left-0 w-full max-w-md p-6
   my-10 md:p-8 rounded-md  md:my-40 [@media(max-width:890px)]:my-32 
  [@media(max-width:890px)]:mr-2  [@media(max-width:890px)]:ml-2 z-10">
					<h1 className="font-bold text-3xl md:text-4xl mb-5">
						{isLogged ? "Sign In" : "Sign Up"}
					</h1>

					{!isLogged && (
						<input
							ref={displayName}
							type="text"
							placeholder="Full Name"
							className="w-full py-3 px-4 mb-3 bg-white/5 rounded-lg"
						/>
					)}

					<input
						ref={email}
						type="text"
						placeholder="Email Address"
						className="w-full py-3 px-4 mb-3 bg-white/5 rounded-lg"
					/>

					<input
						ref={password}
						type="password"
						placeholder="Password"
						className="w-full py-3 px-4 mb-3 bg-white/5 rounded-lg"
					/>
					{errorMessage && (
						<p className="py-3 px-2 mb-3 text-red-400 text-md font-semibold whitespace-pre-line">
							{errorMessage}
						</p>
					)}
					<button
						type="submit"
						className={`${signBtnColor} w-full p-3 font-bold cursor-pointer rounded-lg mb-3`}
						onMouseOver={() => setsignBtnColor("bg-red-800")}
						onMouseOut={() => setsignBtnColor("bg-red-500")}
						onClick={() => handleSubmit()}>
						{isLogged ? "Sign In" : "Sign Up"}
					</button>

					{isLogged && (
						<div className="flex items-center mb-3">
							<input
								type="checkbox"
								className="mr-2"
							/>
							<p>Remember Me</p>
						</div>
					)}

					{isLogged ? (
						<p className="mb-6">
							New to Netflix?{" "}
							<b
								className="cursor-pointer"
								onClick={() => setIsLogged(!isLogged)}>
								Sign Up
							</b>
						</p>
					) : (
						<p className="mb-6">
							Already User?{" "}
							<b
								className="cursor-pointer"
								onClick={() => setIsLogged(!isLogged)}>
								Sign In
							</b>
						</p>
					)}
				</form>
			</div>
		</div>
	);
};
export default Login;
