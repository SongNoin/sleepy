import ProfileUpload from "../../commons/profileupload/profileupload.container";
import {
  Wrapper,
  ModifyTitle,
  ModifyWrapper,
  Title,
  InputWrapper,
  Label,
  Input,
  ButtonWrapper,
  NameWrapper,
  WrapperHeader,
  UploadWrapper,
  Header,
  ModifyButton,
  WrapperBody,
} from "./profilemodify.styles";

export default function ProfileModifyUI(props) {
  return (
    <Wrapper>
      <ModifyTitle>내 정보 수정</ModifyTitle>
      <ModifyWrapper>
        <WrapperHeader>
          <Header>
            <NameWrapper>
              <Title>닉네임 변경</Title>
              <InputWrapper>
                <Label>변경 할 닉네임</Label>
                <Input type="text" onChange={props.onChangeName} />
              </InputWrapper>
              <ButtonWrapper>
                <ModifyButton onClick={props.onClickUpdateUserName}>
                  닉네임 변경
                </ModifyButton>
              </ButtonWrapper>
            </NameWrapper>
          </Header>
          <Header>
            <Title>비밀번호 변경</Title>
            <InputWrapper>
              <Label>현재 비밀번호</Label>
              <Input type="password" />
            </InputWrapper>
            <InputWrapper>
              <Label>새 비밀번호</Label>
              <Input type="password" onChange={props.onChangePassword} />
            </InputWrapper>
            <InputWrapper>
              <Label>새 비밀번호 확인</Label>
              <Input type="password" onChange={props.onChangeCheckPassword} />
            </InputWrapper>
            <ButtonWrapper>
              <ModifyButton onClick={props.onClickResetPassword}>
                비밀번호 변경
              </ModifyButton>
            </ButtonWrapper>
          </Header>
        </WrapperHeader>
        <WrapperBody>
          <NameWrapper>
            <Title>내 사진 변경</Title>
            <UploadWrapper>
              <Label>변경 할 사진</Label>
              <ProfileUpload
                onChangeFile={props.onChangeFile}
                defaultPicture={props.data?.fetchUserLoggedIn.picture}
              />
            </UploadWrapper>
            <ButtonWrapper>
              <ModifyButton onClick={props.onClickUpdateUserPicture}>
                프로필사진 변경
              </ModifyButton>
            </ButtonWrapper>
          </NameWrapper>
        </WrapperBody>
      </ModifyWrapper>
    </Wrapper>
  );
}
