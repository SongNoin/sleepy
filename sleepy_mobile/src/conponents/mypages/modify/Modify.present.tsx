import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import {
  ModifyView,
  ModifynameWrapper,
  ModifyTitleWapper,
  Title,
  ModifynameInputWrapper,
  ModifyInputLabel,
  ModifyInput,
  ModifyPasswordWrapper,
  ModifyButton,
  ModifyButtonText,
} from "./Modify.styles";

const ModifyUI = () => {
  return (
    <ScrollView>
      <ModifyView>
        <ModifynameWrapper>
          <ModifyTitleWapper>
            <Title>닉네임 변경</Title>
          </ModifyTitleWapper>
          <ModifynameInputWrapper>
            <ModifyInputLabel>현재 닉네임</ModifyInputLabel>
            <ModifyInput></ModifyInput>
            <ModifyInputLabel>변경할 닉네임</ModifyInputLabel>
            <ModifyInput></ModifyInput>
          </ModifynameInputWrapper>
          <ModifyButton>
            <ModifyButtonText>닉네임 변경하기</ModifyButtonText>
          </ModifyButton>
        </ModifynameWrapper>
        <ModifyPasswordWrapper>
          <ModifyTitleWapper>
            <Title></Title>
          </ModifyTitleWapper>
          <ModifynameInputWrapper>
            <ModifyTitleWapper>
              <Title>비밀번호 변경</Title>
            </ModifyTitleWapper>
            <ModifyInputLabel>현재 비밀번호</ModifyInputLabel>
            <ModifyInput></ModifyInput>
            <ModifyInputLabel>새 비밀번호</ModifyInputLabel>
            <ModifyInput></ModifyInput>
            <ModifyInputLabel>새 비밀번호 확인</ModifyInputLabel>
            <ModifyInput></ModifyInput>
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
