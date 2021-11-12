import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import SidebarUI from "./sidebar.presenter";

export default function Sidebar() {
  const router = useRouter();
  const { accessToken, setUserInfo } = useContext(GlobalContext);

  function onClickMoveToRegister() {
    router.push("/register");
  }
  function onClickMoveToProductstable() {
    router.push("/productstable");
  }
  function onClickMoveToSalestable() {
    router.push("/salestable");
  }
  function onClickMoveToSignup() {
    router.push("/signup");
  }
  function onClickMoveToLogin() {
    router.push("/login");
  }
  function onClickLogout() {
    localStorage.clear();
    alert("로그아웃이 되었습니다");
    location.reload();
  }
  return (
    <SidebarUI
      onClickMoveToRegister={onClickMoveToRegister}
      onClickMoveToProductstable={onClickMoveToProductstable}
      onClickMoveToSalestable={onClickMoveToSalestable}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickLogout={onClickLogout}
      accessToken={accessToken}
    />
  );
}
