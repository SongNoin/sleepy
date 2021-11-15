import { useRouter } from "next/dist/client/router";
import MainUI from "./main.presenter";

export default function Main() {
  const router = useRouter();
  function onClickMoveToLogin() {
    router.push("/login");
  }
  function onClickMoveToSignup() {
    router.push("/signup");
  }
  return (
    <MainUI
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
