"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "@/utils/userSlice";
import { useRouter } from "next/navigation";

export default function AuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const dispatch = useDispatch();
	const router = useRouter();
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user === null) {
				dispatch(removeUser());
				router.push("/"); // Not logged in
			} else {
				const { uid, email, displayName } = user;
				dispatch(addUser({ uid, email, displayName }));
				router.push("/browse");
			}
			// Set loading to false after checking auth state
		});

		return () => unsubscribe();
		// }, [user]);
	}, []);
	return children;
}
