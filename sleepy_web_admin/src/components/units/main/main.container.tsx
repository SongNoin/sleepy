import { useMutation } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import MainUI from "./main.presenter";
import { LOGIN_USER } from "./main.queries";

export default function Main() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onClickMoveToSignup() {
    router.push("/signup");
  }
  async function onClickLogin() {
    if (myEmail === "") {
      setEmailError("이메일이 입력되지 않았습니다!");
    }
    if (myPassword === "") {
      setPasswordError("비밀번호가 입력되지 않았습니다!");
      return;
    }
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
      router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <MainUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
}
