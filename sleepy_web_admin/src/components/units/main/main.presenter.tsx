import {
  Wrapper,
  Logo,
  MainWrapper,
  MainTitleWrapper,
  Line,
  TitleText,
  MainInput,
  MainLabel,
  MainButton,
  InputWrapper,
  SignupButton,
  Error,
} from "./main.styles";

export default function MainUI(props) {
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Logo src="images/logo.png" />
          <MainTitleWrapper>
            <Line />
            <TitleText>관리자 로그인</TitleText>
            <Line />
          </MainTitleWrapper>
          <InputWrapper>
            <MainLabel>이메일</MainLabel>
            <MainInput type="text" onChange={props.onChangeEmail}></MainInput>
            <Error>{props.emailError}</Error>
          </InputWrapper>
          <InputWrapper>
            <MainLabel>비밀번호</MainLabel>
            <MainInput
              type="password"
              onChange={props.onChangePassword}
            ></MainInput>
            <Error>{props.passwordError}</Error>
          </InputWrapper>
          <MainButton onClick={props.onClickLogin}>로그인</MainButton>
          <SignupButton onClick={props.onClickMoveToSignup}>
            회원가입
          </SignupButton>
        </MainWrapper>
      </Wrapper>
    </>
  );
}
