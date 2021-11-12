import LoginUI from "./login.presenter";
import { GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/dist/client/router";
import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { LOGIN_USER } from "./login.queries";

export default function Login() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: myEmail,
          password: myPassword,
        },
      });
      localStorage.setItem("refreshToken", "true");
      setAccessToken(result.data?.loginUser.accessToken);
      // location.reload();
      alert("로그인 성공했습니다~");
      router.push("/register");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
