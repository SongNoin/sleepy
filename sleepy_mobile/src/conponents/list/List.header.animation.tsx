import React from "react";

import styled from "@emotion/native";

import { ScrollView } from "react-native";

const ScrollViewWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 10px;
`;

const ScrollIconWrapper = styled.TouchableOpacity`
  width: 67px;
  height: 46px;
  background: #f1eef6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ScrollIcon = styled.Image``;

const ScrollText = styled.Text`
  font-weight: bold;
  font-size: 8px;
  text-align: center;
`;

const HeaderAnimation = () => {
  return (
    <ScrollViewWrapper>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingStart: 18,
          paddingEnd: 5,
        }}
      >
        <ScrollIconWrapper>
          <ScrollIcon
            source={require("../../../public/images/list/pillow.png")}
          />
          <ScrollText>배게</ScrollText>
        </ScrollIconWrapper>
        <ScrollIconWrapper>
          <ScrollIcon
            source={require("../../../public/images/list/blankits.png")}
          />
          <ScrollText>이불</ScrollText>
        </ScrollIconWrapper>
        <ScrollIconWrapper>
          <ScrollIcon
            source={require("../../../public/images/list/courtain.png")}
          />
          <ScrollText>암막 커튼</ScrollText>
        </ScrollIconWrapper>
        <ScrollIconWrapper>
          <ScrollIcon
            source={require("../../../public/images/list/pajamas.png")}
          />
          <ScrollText>수면 잠옷</ScrollText>
        </ScrollIconWrapper>
        <ScrollIconWrapper>
          <ScrollIcon source={require("../../../public/images/list/oil.png")} />
          <ScrollText>오일</ScrollText>
        </ScrollIconWrapper>
        <ScrollIconWrapper>
          <ScrollIcon
            source={require("../../../public/images/list/book.png")}
          />
          <ScrollText>도서</ScrollText>
        </ScrollIconWrapper>
        <ScrollIconWrapper>
          <ScrollIcon
            source={require("../../../public/images/list/eyepatch.png")}
          />
          <ScrollText>수면 용품</ScrollText>
        </ScrollIconWrapper>
        <ScrollIconWrapper>
          <ScrollIcon
            source={require("../../../public/images/list/pill.png")}
          />
          <ScrollText>수면 보조제</ScrollText>
        </ScrollIconWrapper>
      </ScrollView>
    </ScrollViewWrapper>
  );
};

export default HeaderAnimation;
