import {
  Wrapper,
  MainLogoImage,
  MoveButton,
  MoveButtonWrapper,
} from "./main.styles";

export default function MainUI(props) {
  return (
    <>
      <Wrapper>
        <MainLogoImage src="/images/logsleepy.png" />
        <MoveButtonWrapper>
          <MoveButton onClick={props.onClickMoveToLogin}>로그인하기</MoveButton>
          <MoveButton onClick={props.onClickMoveToSignup}>회원가입</MoveButton>
        </MoveButtonWrapper>
      </Wrapper>
    </>
  );
}
