"use client";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { addUser, removeUser } from "@/utils/userSlice";
import { useRouter } from "next/navigation";
//import { RootState } from "@/utils/appStore";
//import { useSelector } from "react-redux";

const Body = () => {
	const dispatch = useDispatch();
	//const user = useSelector((state: RootState) => state.user);
	const [loading, setLoading] = useState(true);
	// useEffect(() => {
	// 	onAuthStateChanged(auth, (user) => {
	// 		if (user) {
	// 			const { uid, email, displayName } = user;
	// 			dispatch(addUser({ uid, email, displayName }));
	// 		} else {
	// 			dispatch(removeUser());
	// 		}
	// 		setLoading(false); // Set loading to false after checking auth state
	// 	});
	// 	// Cleanup
	// }, []);

	// if (loading) {
	// 	return (
	// 		<div className="flex justify-center items-center h-screen">
	// 			Loading...
	// 		</div>
	// 	);
	// }
	return <Login />;

	// return <div>{user ? <Browse /> : <Login />}</div>;
};

export default Body;
