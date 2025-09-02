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
			}
		}, 3000); // ⏱ Delay of 3000ms (3 seconds)

		return () => clearTimeout(delayRedirect);
	}, [user]);
};

export default useLogginCheck;
