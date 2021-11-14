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
  InnerWrapperSignup,
  InnerWrapperLogin,
  SideMenuIcon,
  SideMenuButton,
  SideMenuButtonRegister,
  SideMenuButtonProduct,
  SideMenuButtonSales,
  SideMenuButtonSignup,
  SideMenuIconLogin,
} from "./sidebar.styles";

export default function SidebarUI(props) {
  return (
    <>
      <Wrapper>
        <TopWrapper>
          <Avatar src="/images/slavatar.png" />
          <Name>밥 먹고 똥 싸는게 좋다</Name>
          <Phrase>관리자 페이지에 오신 걸 환영합니다!</Phrase>
          <Line />
        </TopWrapper>
        <BottomWrapper>
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

          {!props.accessToken && (
            <>
              <InnerWrapperSignup isClickSignup={props.isClickSignup}>
                {props.isClickSignup ? (
                  <SideMenuIcon src="/images/Moon_click.png" />
                ) : (
                  <SideMenuIcon src="/images/Moon.png" />
                )}

                <SideMenuButtonSignup
                  isClickSignup={props.isClickSignup}
                  onClick={props.onClickMoveToSignup}
                >
                  회원 가입
                </SideMenuButtonSignup>
              </InnerWrapperSignup>

              <InnerWrapperLogin isClickLogin={props.isClickLogin}>
                {props.isClickLogin ? (
                  <SideMenuIcon src="/images/logouticon_click.png" />
                ) : (
                  <SideMenuIcon src="/images/logouticon.png" />
                )}

                <SideMenuButtonSignup
                  isClickLogin={props.isClickLogin}
                  onClick={props.onClickMoveToLogin}
                >
                  로그인
                </SideMenuButtonSignup>
              </InnerWrapperLogin>
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
