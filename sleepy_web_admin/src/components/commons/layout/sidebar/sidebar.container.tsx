import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import SidebarUI from "./sidebar.presenter";
import { FETCH_USER_LOGGEDIN } from "./sidebar.queries";

export default function Sidebar() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const { accessToken } = useContext(GlobalContext);
  const isActive = router.pathname;

  function onClickMoveToDashboard() {
    router.push("/dashboard");
  }
  function onClickMoveToRegister() {
    router.push("/register");
  }
  function onClickMoveToProductstable() {
    router.push("/productstable");
  }
  function onClickMoveToSalestable() {
    router.push("/salestable");
  }
  function onClickMoveToModify() {
    router.push("/profilemodify");
  }
  function onClickLogout() {
    localStorage.clear();
    alert("로그아웃이 되었습니다");
    router.push("/");
  }
  return (
    <SidebarUI
      onClickMoveToRegister={onClickMoveToRegister}
      onClickMoveToProductstable={onClickMoveToProductstable}
      onClickMoveToSalestable={onClickMoveToSalestable}
      onClickMoveToDashboard={onClickMoveToDashboard}
      onClickLogout={onClickLogout}
      accessToken={accessToken}
      onClickMoveToModify={onClickMoveToModify}
      isActive={isActive}
      data={data}
    />
  );
}
