import {
  Wrapper,
  Logo,
  Logofirstletter,
  Logootherletters,
  Title,
} from "./header.styles";

export default function HeaderUI() {
  return (
    <>
      <Wrapper>
        <Logo>
          <Logofirstletter src="/images/logofirstletter.png" />
          <Logootherletters src="/images/logoother.png" />
        </Logo>
        <Title>관리자페이지</Title>
      </Wrapper>
    </>
  );
}
