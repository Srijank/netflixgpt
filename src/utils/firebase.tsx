// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC22K7aJ7La5hDKYcEytaDyurBpdGhWFVo",
	authDomain: "netflix-gpt-6d84f.firebaseapp.com",
	projectId: "netflix-gpt-6d84f",
	storageBucket: "netflix-gpt-6d84f.firebasestorage.app",
	messagingSenderId: "497163905136",
	appId: "1:497163905136:web:2214a6246cce011dc5acb5",
	measurementId: "G-56DJ3KWDJJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
	analytics = getAnalytics(app);
}

export const auth = getAuth(app);
