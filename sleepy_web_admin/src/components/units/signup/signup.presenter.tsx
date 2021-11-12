import { Wrapper } from "./signup.styles";

export default function SignupUI(props) {
  return (
    <>
      <Wrapper>
        이메일
        <input onChange={props.onChangeEmail}></input>
        이름
        <input onChange={props.onChangeName}></input>
        비밀번호
        <input onChange={props.onChangePassword}></input>
        <button onClick={props.onClickSignup}>회원가입조져</button>
      </Wrapper>
    </>
  );
}
