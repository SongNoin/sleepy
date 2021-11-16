import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    const accessToken = localStorage.getItem("refreshToken");
    if (!accessToken) {
      alert("로그인 한 사람만 입장가능합니다.");
      router.push("/");
    }
  }, []);

  return <Component {...props} />;
};
