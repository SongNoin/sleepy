import { Wrapper } from "./login.styles";

export default function LoginUI(props) {
  return (
    <>
      <Wrapper>
        이메일<input onChange={props.onChangeEmail}></input>
        비번<input onChange={props.onChangePassword}></input>
        <button onClick={props.onClickLogin}>로그인 조져</button>
      </Wrapper>
    </>
  );
}
