import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import ProfileUploadContainer from "../../commons/profileupload/profileupload.container";

import {
  ModifyPhotoWrapper,
  ModifyPhoto,
  ModifyView,
  ModifynameWrapper,
  ModifyTitleWapper,
  Title,
  ModifyInputWrapper,
  RecentNameContent,
  ModifynameInputWrapper,
  ModifyInputLabel,
  ModifyInput,
  ModifyPasswordWrapper,
  ModifyButton,
  ModifyButtonText,
} from "./Modify.styles";

const ModifyUI = (props: any) => {
  return (
    <ScrollView>
      <ModifyView>
        <ModifyPhotoWrapper>
          <ModifyTitleWapper>
            <Title>프로필 사진 변경</Title>
          </ModifyTitleWapper>
          <ModifyPhoto>
            <ProfileUploadContainer setImage={props.setImage} />
          </ModifyPhoto>
          <ModifyButton>
            <ModifyButtonText onPress={props.onClickUpdateUserPhoto}>
              프로필 사진 변경하기
            </ModifyButtonText>
          </ModifyButton>
        </ModifyPhotoWrapper>
        <ModifynameWrapper>
          <ModifyTitleWapper>
            <Title>닉네임 변경</Title>
          </ModifyTitleWapper>
          <ModifynameInputWrapper>
            <ModifyInputLabel>현재 닉네임</ModifyInputLabel>
            <ModifyInputWrapper>
              <RecentNameContent>
                {props.data?.fetchUserLoggedIn.name}
              </RecentNameContent>
            </ModifyInputWrapper>
            <ModifyInputLabel>변경할 닉네임</ModifyInputLabel>
            <ModifyInputWrapper>
              <ModifyInput onChangeText={props.onChangeNickname}></ModifyInput>
            </ModifyInputWrapper>
          </ModifynameInputWrapper>
          <ModifyButton>
            <ModifyButtonText onPress={props.onClickUpdateUserName}>
              닉네임 변경하기
            </ModifyButtonText>
          </ModifyButton>
        </ModifynameWrapper>
        <ModifyPasswordWrapper>
          <ModifynameInputWrapper>
            <ModifyTitleWapper>
              <Title>비밀번호 변경</Title>
            </ModifyTitleWapper>
            <ModifyInputLabel>현재 비밀번호</ModifyInputLabel>
            <ModifyInputWrapper>
              <ModifyInput></ModifyInput>
            </ModifyInputWrapper>
            <ModifyInputLabel>새 비밀번호</ModifyInputLabel>
            <ModifyInputWrapper>
              <ModifyInput></ModifyInput>
            </ModifyInputWrapper>
            <ModifyInputLabel>새 비밀번호 확인</ModifyInputLabel>
            <ModifyInputWrapper>
              <ModifyInput></ModifyInput>
            </ModifyInputWrapper>
          </ModifynameInputWrapper>
          <ModifyButton>
            <ModifyButtonText>비밀번호 변경하기</ModifyButtonText>
          </ModifyButton>
        </ModifyPasswordWrapper>
      </ModifyView>
    </ScrollView>
  );
};

export default ModifyUI;
