import { RootState } from "@/utils/appStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useLogginCheck = () => {
	const user = useSelector((store: RootState) => store.user);
	const router = useRouter();
	useEffect(() => {
		const delayRedirect = setTimeout(() => {
			if (user === null) {
				router.push("/");
			} else {
				router.push("/browse");
			}
		}, 2000); // ⏱ Delay of 1000ms (1 second)

		return () => clearTimeout(delayRedirect);
	}, [user]);
};

export default useLogginCheck;
