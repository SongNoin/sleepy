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
  const [myCheckPassword, setMyCheckPassword] = useState("");

  const [isSuper, setIsSuper] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");

  function onChangeEmail(event: any) {
    setMyEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  }
  function onChangeName(event: any) {
    setMyName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  }
  function onChangePassword(event: any) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }
  function onChangeCheckPassword(event: any) {
    setMyCheckPassword(event.target.value);
    if (event.target.value !== "") {
      setCheckPasswordError("");
    }
  }

  function onClickIsNotSuper() {
    setIsSuper(false);
  }
  function onClickIsSuper() {
    setIsSuper(true);
  }
  async function onClickSignup() {
    if (myEmail === "") {
      setEmailError("이메일이 입력되지 않았습니다!");
      return;
    }
    if (myName === "") {
      setNameError("이름이 입력되지 않았습니다!");
      return;
    }
    if (/[!?@#$%^&*():;+-=~{}<>]/.test(myName)) {
      setNameError("이름에 특수부호를 넣을 수 없습니다!");
      return;
    }

    if (myPassword === "") {
      setPasswordError("비밀번호가 입력되지 않았습니다!");
      return;
    }
    if (myCheckPassword === "") {
      setCheckPasswordError("확인 비밀번호가 입력되지 않았습니다!");
      return;
    }
    if (/\w+@\w+\.\w+/.test(myEmail) === false) {
      alert("이메일 형식이 아닙니다!");
      return;
    }
    if (myPassword.length < 4) {
      setPasswordError("비밀번호는 4자리 이상이여야합니다.");
      return;
    }
    if (myPassword !== myCheckPassword) {
      alert("비밀번호가 같지 않습니다!");
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            name: isSuper ? "#" + myName : myName,
            password: myPassword,
          },
        },
      });
      alert("회원가입이 완료되었습니다!");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  }
  console.log("isSuper", isSuper);
  return (
    <SignupUI
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      checkPasswordError={checkPasswordError}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickSignup={onClickSignup}
      onClickIsNotSuper={onClickIsNotSuper}
      onClickIsSuper={onClickIsSuper}
    />
  );
}
