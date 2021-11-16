import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useState, useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import SidebarUI from "./sidebar.presenter";
import { FETCH_USER_LOGGEDIN } from "./sidebar.queries";

export default function Sidebar() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const { accessToken } = useContext(GlobalContext);
  const [isClickRegister, setIsClickRegister] = useState(false);
  const [isClickProduct, setIsClickProduct] = useState(false);
  const [isClickSales, setIsClickSales] = useState(false);
  const [isClickModify, setIsClickModify] = useState(false);

  const [isClickDashboard, setIsClickDashboard] = useState(false);

  function onClickMoveToRegister() {
    router.push("/register");
    setIsClickRegister(true);
    setIsClickProduct(false);
    setIsClickSales(false);
    setIsClickDashboard(false);
    setIsClickModify(false);
  }
  function onClickMoveToProductstable() {
    router.push("/productstable");
    setIsClickRegister(false);
    setIsClickProduct(true);
    setIsClickSales(false);
    setIsClickDashboard(false);
    setIsClickModify(false);
  }
  function onClickMoveToSalestable() {
    router.push("/salestable");
    setIsClickRegister(false);
    setIsClickProduct(false);
    setIsClickSales(true);
    setIsClickDashboard(false);
    setIsClickModify(false);
  }

  function onClickMoveToDashboard() {
    router.push("/dashboard");
    setIsClickRegister(false);
    setIsClickProduct(false);
    setIsClickSales(false);
    setIsClickDashboard(true);
    setIsClickModify(false);
  }
  function onClickMoveToModify() {
    router.push("/profilemodify");
    setIsClickRegister(false);
    setIsClickProduct(false);
    setIsClickSales(false);
    setIsClickDashboard(false);
    setIsClickModify(true);
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
      isClickRegister={isClickRegister}
      isClickProduct={isClickProduct}
      isClickSales={isClickSales}
      isClickDashboard={isClickDashboard}
      isClickModify={isClickModify}
      onClickMoveToModify={onClickMoveToModify}
      data={data}
    />
  );
}
