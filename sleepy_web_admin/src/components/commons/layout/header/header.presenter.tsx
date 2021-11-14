import { Wrapper, InnerWrapper, Logo, Title } from "./header.styles";

export default function HeaderUI() {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Logo src="/images/logo.png"></Logo>
          <Title>관리자페이지</Title>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
