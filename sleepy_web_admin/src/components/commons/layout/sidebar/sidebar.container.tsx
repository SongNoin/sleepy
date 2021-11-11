import { useRouter } from "next/dist/client/router";
import SidebarUI from "./sidebar.presenter";

export default function Sidebar() {
  const router = useRouter();

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
  return (
    <SidebarUI
      onClickMoveToRegister={onClickMoveToRegister}
      onClickMoveToProductstable={onClickMoveToProductstable}
      onClickMoveToSalestable={onClickMoveToSalestable}
      onClickMoveToSignup={onClickMoveToSignup}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
