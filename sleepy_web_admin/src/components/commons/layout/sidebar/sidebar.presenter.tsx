import {
  Wrapper,
  Line,
  TopWrapper,
  Avatar,
  Name,
  Phrase,
  BottomWrapper,
  InnerWrapper,
  InnerWrapperRegister,
  InnerWrapperProduct,
  InnerWrapperSales,
  InnerWrapperDashboard,
  InnerWrapperModify,
  SideMenuButtonModify,
  SideMenuDashboardIcon,
  SideMenuIcon,
  SideMenuButton,
  SideMenuButtonRegister,
  SideMenuButtonProduct,
  SideMenuButtonSales,
  SideMenuButtonDashboard,
} from "./sidebar.styles";

export default function SidebarUI(props) {
  return (
    <>
      <Wrapper>
        <TopWrapper>
          <Avatar
            src={
              props.data?.fetchUserLoggedIn.picture
                ? `https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`
                : "/images/defaultprofile.png"
            }
          />
          <Name>
            {props.data?.fetchUserLoggedIn.name[0] === "#"
              ? props.data?.fetchUserLoggedIn.name.slice(
                  1,
                  props.data?.fetchUserLoggedIn.name.length
                )
              : props.data?.fetchUserLoggedIn.name}
            님
          </Name>
          <Phrase>
            {props.data?.fetchUserLoggedIn.name[0] === "#"
              ? "관리자 페이지에 오신 걸 환영합니다!"
              : "판매자 페이지에 오신 걸 환영합니다!"}
          </Phrase>
          <Line />
        </TopWrapper>
        <BottomWrapper>
          {props.data?.fetchUserLoggedIn.name[0] === "#" ? (
            // 관리자인 경우
            <>
              <InnerWrapperDashboard isActive={props.isActive}>
                {props.isActive === "/dashboard" ? (
                  <SideMenuDashboardIcon src="/images/dashboard_click.png" />
                ) : (
                  <SideMenuDashboardIcon src="/images/dashboard.png" />
                )}
                <SideMenuButtonDashboard
                  isActive={props.isActive}
                  onClick={props.onClickMoveToDashboard}
                >
                  대시보드
                </SideMenuButtonDashboard>
              </InnerWrapperDashboard>
              <InnerWrapperModify isActive={props.isActive}>
                {props.isActive === "/profilemodify" ? (
                  <SideMenuIcon src="/images/modify_click.png" />
                ) : (
                  <SideMenuIcon src="/images/modify.png" />
                )}
                <SideMenuButtonModify
                  isActive={props.isActive}
                  onClick={props.onClickMoveToModify}
                >
                  내 정보 수정
                </SideMenuButtonModify>
              </InnerWrapperModify>
            </>
          ) : (
            // 판매자인 경우
            <>
              <InnerWrapperDashboard isActive={props.isActive}>
                {props.isActive === "/dashboard" ? (
                  <SideMenuDashboardIcon src="/images/dashboard_click.png" />
                ) : (
                  <SideMenuDashboardIcon src="/images/dashboard.png" />
                )}
                <SideMenuButtonDashboard
                  isActive={props.isActive}
                  onClick={props.onClickMoveToDashboard}
                >
                  대시보드
                </SideMenuButtonDashboard>
              </InnerWrapperDashboard>
              <InnerWrapperRegister isActive={props.isActive}>
                {props.isActive === "/register" ? (
                  <SideMenuIcon src="/images/posticon_click.png" />
                ) : (
                  <SideMenuIcon src="/images/posticon.png" />
                )}
                <SideMenuButtonRegister
                  isActive={props.isActive}
                  onClick={props.onClickMoveToRegister}
                >
                  상품 등록
                </SideMenuButtonRegister>
              </InnerWrapperRegister>
              <InnerWrapperProduct isActive={props.isActive}>
                {props.isActive === "/productstable" ? (
                  <SideMenuIcon src="/images/presenticon_click.png" />
                ) : (
                  <SideMenuIcon src="/images/presenticon.png" />
                )}
                <SideMenuButtonProduct
                  isActive={props.isActive}
                  onClick={props.onClickMoveToProductstable}
                >
                  상품 현황
                </SideMenuButtonProduct>
              </InnerWrapperProduct>

              <InnerWrapperSales isActive={props.isActive}>
                {props.isActive === "/salestable" ? (
                  <SideMenuIcon src="/images/sellicon_click.png" />
                ) : (
                  <SideMenuIcon src="/images/sellicon.png" />
                )}
                <SideMenuButtonSales
                  isActive={props.isActive}
                  onClick={props.onClickMoveToSalestable}
                >
                  판매 현황
                </SideMenuButtonSales>
              </InnerWrapperSales>
              <InnerWrapperModify isActive={props.isActive}>
                {props.isActive === "/profilemodify" ? (
                  <SideMenuIcon src="/images/modify_click.png" />
                ) : (
                  <SideMenuIcon src="/images/modify.png" />
                )}
                <SideMenuButtonModify
                  isActive={props.isActive}
                  onClick={props.onClickMoveToModify}
                >
                  내 정보 수정
                </SideMenuButtonModify>
              </InnerWrapperModify>
            </>
          )}
          {props.accessToken && (
            <InnerWrapper>
              <SideMenuIcon src="/images/logouticon.png" />
              <SideMenuButton onClick={props.onClickLogout}>
                로그아웃
              </SideMenuButton>
            </InnerWrapper>
          )}
        </BottomWrapper>
      </Wrapper>
    </>
  );
}
