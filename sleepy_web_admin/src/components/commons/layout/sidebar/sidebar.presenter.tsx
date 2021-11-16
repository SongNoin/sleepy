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
                : "/images/slavatar.png"
            }
          />
          <Name>{props.data?.fetchUserLoggedIn.name} 님</Name>
          <Phrase>관리자 페이지에 오신 걸 환영합니다!</Phrase>
          <Line />
        </TopWrapper>
        <BottomWrapper>
          <InnerWrapperDashboard isClickDashboard={props.isClickDashboard}>
            {props.isClickDashboard ? (
              <SideMenuIcon src="/images/logouticon_click.png" />
            ) : (
              <SideMenuIcon src="/images/logouticon.png" />
            )}
            <SideMenuButtonDashboard
              isClickDashboard={props.isClickDashboard}
              onClick={props.onClickMoveToDashboard}
            >
              대쉬보드
            </SideMenuButtonDashboard>
          </InnerWrapperDashboard>
          <InnerWrapperRegister isClickRegister={props.isClickRegister}>
            {!props.isClickRegister ? (
              <SideMenuIcon src="/images/posticon.png" />
            ) : (
              <SideMenuIcon src="/images/posticon_click.png" />
            )}
            <SideMenuButtonRegister
              isClickRegister={props.isClickRegister}
              onClick={props.onClickMoveToRegister}
            >
              상품 등록
            </SideMenuButtonRegister>
          </InnerWrapperRegister>
          <InnerWrapperProduct isClickProduct={props.isClickProduct}>
            {props.isClickProduct ? (
              <SideMenuIcon src="/images/presenticon_click.png" />
            ) : (
              <SideMenuIcon src="/images/presenticon.png" />
            )}
            <SideMenuButtonProduct
              isClickProduct={props.isClickProduct}
              onClick={props.onClickMoveToProductstable}
            >
              상품 현황
            </SideMenuButtonProduct>
          </InnerWrapperProduct>

          <InnerWrapperSales isClickSales={props.isClickSales}>
            {props.isClickSales ? (
              <SideMenuIcon src="/images/sellicon_click.png" />
            ) : (
              <SideMenuIcon src="/images/sellicon.png" />
            )}
            <SideMenuButtonSales
              isClickSales={props.isClickSales}
              onClick={props.onClickMoveToSalestable}
            >
              판매 현황
            </SideMenuButtonSales>
          </InnerWrapperSales>
          <InnerWrapperModify isClickModify={props.isClickModify}>
            {props.isClickModify ? (
              <SideMenuIcon src="/images/Moon_click.png" />
            ) : (
              <SideMenuIcon src="/images/Moon.png" />
            )}
            <SideMenuButtonModify
              isClickModify={props.isClickModify}
              onClick={props.onClickMoveToModify}
            >
              내 정보 수정
            </SideMenuButtonModify>
          </InnerWrapperModify>
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
