import {
  Wrapper,
  Line,
  TopWrapper,
  Avatar,
  Name,
  Phrase,
  BottomWrapper,
  InnerWrapper,
  SideMenuIcon,
  SideMenuButton,
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
          <InnerWrapper>
            <SideMenuIcon src="/images/posticon.png" />
            <SideMenuButton onClick={props.onClickMoveToRegister}>
              상품 등록
            </SideMenuButton>
          </InnerWrapper>
          <Line />
          <InnerWrapper>
            <SideMenuIcon src="/images/presenticon.png" />
            <SideMenuButton onClick={props.onClickMoveToProductstable}>
              상품 현황
            </SideMenuButton>
          </InnerWrapper>
          <Line />
          <InnerWrapper>
            <SideMenuIcon src="/images/sellicon.png" />
            <SideMenuButton onClick={props.onClickMoveToSalestable}>
              판매 현황
            </SideMenuButton>
          </InnerWrapper>
          <Line />
          {!props.accessToken && (
            <>
              <InnerWrapper>
                <SideMenuIcon src="/images/posticon.png" />
                <SideMenuButton onClick={props.onClickMoveToSignup}>
                  회원 가입
                </SideMenuButton>
              </InnerWrapper>
              <Line />
              <InnerWrapper>
                <SideMenuIcon src="/images/logouticon.png" />
                <SideMenuButton onClick={props.onClickMoveToLogin}>
                  로그인
                </SideMenuButton>
              </InnerWrapper>
            </>
          )}
          {props.accessToken && (
            <SideMenuButton onClick={props.onClickLogout}>
              로그아웃
            </SideMenuButton>
          )}
        </BottomWrapper>
      </Wrapper>
    </>
  );
}
