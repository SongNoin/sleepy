import { Wrapper, SideMenuButton } from "./sidebar.styles";

export default function SidebarUI(props) {
  return (
    <>
      <Wrapper>
        <SideMenuButton onClick={props.onClickMoveToRegister}>
          상품등록
        </SideMenuButton>
        <SideMenuButton onClick={props.onClickMoveToProductstable}>
          상품현황
        </SideMenuButton>
        <SideMenuButton onClick={props.onClickMoveToSalestable}>
          판매현황
        </SideMenuButton>
        {!props.accessToken && (
          <>
            <SideMenuButton onClick={props.onClickMoveToSignup}>
              회원가입
            </SideMenuButton>
            <SideMenuButton onClick={props.onClickMoveToLogin}>
              로그인
            </SideMenuButton>
          </>
        )}
        {props.accessToken && (
          <SideMenuButton onClick={props.onClickLogout}>
            로그아웃
          </SideMenuButton>
        )}
      </Wrapper>
    </>
  );
}
