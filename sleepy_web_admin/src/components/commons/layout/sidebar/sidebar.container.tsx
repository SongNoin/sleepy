import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import SidebarUI from "./sidebar.presenter";

export default function Sidebar() {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  const [isClickRegister, setIsClickRegister] = useState(false);
  const [isClickProduct, setIsClickProduct] = useState(false);
  const [isClickSales, setIsClickSales] = useState(false);
  const [isClickSignup, setIsClickSignup] = useState(false);
  const [isClickLogin, setIsClickLogin] = useState(false);

  function onClickMoveToRegister() {
    router.push("/register");
    setIsClickRegister(true);
    setIsClickProduct(false);
    setIsClickSales(false);
    setIsClickSignup(false);
    setIsClickLogin(false);
  }
  function onClickMoveToProductstable() {
    router.push("/productstable");
    setIsClickRegister(false);
    setIsClickProduct(true);
    setIsClickSales(false);
    setIsClickSignup(false);
    setIsClickLogin(false);
  }
  function onClickMoveToSalestable() {
    router.push("/salestable");
    setIsClickRegister(false);
    setIsClickProduct(false);
    setIsClickSales(true);
    setIsClickSignup(false);
    setIsClickLogin(false);
  }
  function onClickMoveToSignup() {
    router.push("/signup");
    setIsClickRegister(false);
    setIsClickProduct(false);
    setIsClickSales(false);
    setIsClickSignup(true);
    setIsClickLogin(false);
  }
  function onClickMoveToLogin() {
    router.push("/login");
    setIsClickRegister(false);
    setIsClickProduct(false);
    setIsClickSales(false);
    setIsClickSignup(false);
    setIsClickLogin(true);
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
      isClickRegister={isClickRegister}
      isClickProduct={isClickProduct}
      isClickSales={isClickSales}
      isClickSignup={isClickSignup}
      isClickLogin={isClickLogin}
    />
  );
}
