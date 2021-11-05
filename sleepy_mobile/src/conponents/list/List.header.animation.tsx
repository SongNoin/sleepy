import React from "react";

import styled from "@emotion/native";

import { ScrollView } from "react-native";

const ScrollViewWrapper = styled.View``;

const ScrollIconWrapper = styled.TouchableOpacity`
  width: 67px;
  height: 46px;
  background: #f1eef7;
  border-radius: 6px;
`;

const ScrollIcon = styled.Image``;

const ScrollText = styled.Text``;

const HeaderAnimation = () => {
  return (
    <ScrollViewWrapper>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingStart: 5,
          paddingEnd: 5,
        }}
      >
        <ScrollIconWrapper>
          <ScrollIcon
            source={require("../../../public/images/list/pillow.png")}
          />
          <ScrollText></ScrollText>
        </ScrollIconWrapper>
      </ScrollView>
    </ScrollViewWrapper>
  );
};

export default HeaderAnimation;
