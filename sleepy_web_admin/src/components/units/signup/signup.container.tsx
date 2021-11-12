import { useMutation } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import SignupUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queries";

export default function Signup() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [myEmail, setMyEmail] = useState("");
  const [myName, setMyName] = useState("");
  const [myPassword, setMyPassword] = useState("");

  function onChangeEmail(event: any) {
    setMyEmail(event.target.value);
  }
  function onChangeName(event: any) {
    setMyName(event.target.value);
  }
  function onChangePassword(event: any) {
    setMyPassword(event.target.value);
  }

  async function onClickSignup() {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
      alert("회원가입이 완료되었습니다!");
      router.push("/register");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <SignupUI
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onClickSignup={onClickSignup}
    />
  );
}
