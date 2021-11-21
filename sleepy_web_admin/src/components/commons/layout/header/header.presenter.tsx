import { Wrapper, InnerWrapper, Logo, Title } from "./header.styles";

export default function HeaderUI(props) {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Logo src="/images/logo.png"></Logo>
          <Title>
            {props.currentPage === "/"
              ? "로그인"
              : props.currentPage === "/signup"
              ? "회원가입"
              : props.data?.fetchUserLoggedIn.name[0] === "#"
              ? "관리자 페이지"
              : "판매자 페이지"}
          </Title>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
