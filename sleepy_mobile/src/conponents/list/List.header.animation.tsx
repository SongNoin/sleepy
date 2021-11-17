import React, { useContext } from "react";

import styled from "@emotion/native";

import { ScrollView } from "react-native";
import { GlobalContext } from "../../../App";

const ScrollViewWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 10px;
`;

const ScrollIconWrapper = styled.TouchableOpacity`
  width: 67px;
  height: 46px;
  background: #332f84;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ScrollIconWrapperPress = styled.TouchableOpacity`
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

const HeaderAnimation = (props) => {
  const { tagId } = useContext(GlobalContext);

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
        {tagId === "배게" ? (
          <ScrollIconWrapper onPress={() => props.onPressListCategory("배게")}>
            <ScrollIcon
              source={require("../../../public/images/list/pillow_on.png")}
            />
            <ScrollText style={{ color: "#FFFFFF" }}>배게</ScrollText>
          </ScrollIconWrapper>
        ) : (
          <ScrollIconWrapperPress
            onPress={() => props.onPressListCategory("배게")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/pillow.png")}
            />
            <ScrollText>배게</ScrollText>
          </ScrollIconWrapperPress>
        )}

        {tagId === "이불" ? (
          <ScrollIconWrapper onPress={() => props.onPressListCategory("이불")}>
            <ScrollIcon
              source={require("../../../public/images/list/blankits_on.png")}
            />
            <ScrollText style={{ color: "#FFFFFF" }}>이불</ScrollText>
          </ScrollIconWrapper>
        ) : (
          <ScrollIconWrapperPress
            onPress={() => props.onPressListCategory("이불")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/blankits.png")}
            />
            <ScrollText>이불</ScrollText>
          </ScrollIconWrapperPress>
        )}
        {tagId === "암막커튼" ? (
          <ScrollIconWrapper
            onPress={() => props.onPressListCategory("암막커튼")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/courtain_on.png")}
            />
            <ScrollText style={{ color: "#FFFFFF" }}>암막 커튼</ScrollText>
          </ScrollIconWrapper>
        ) : (
          <ScrollIconWrapperPress
            onPress={() => props.onPressListCategory("암막커튼")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/courtain.png")}
            />
            <ScrollText>암막 커튼</ScrollText>
          </ScrollIconWrapperPress>
        )}
        {tagId === "잠옷" ? (
          <ScrollIconWrapper onPress={() => props.onPressListCategory("잠옷")}>
            <ScrollIcon
              source={require("../../../public/images/list/pajamas_on.png")}
            />
            <ScrollText style={{ color: "#FFFFFF" }}>수면 잠옷</ScrollText>
          </ScrollIconWrapper>
        ) : (
          <ScrollIconWrapperPress
            onPress={() => props.onPressListCategory("잠옷")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/pajamas.png")}
            />
            <ScrollText>수면 잠옷</ScrollText>
          </ScrollIconWrapperPress>
        )}
        {tagId === "오일" ? (
          <ScrollIconWrapper onPress={() => props.onPressListCategory("오일")}>
            <ScrollIcon
              source={require("../../../public/images/list/oil_on.png")}
            />
            <ScrollText style={{ color: "#FFFFFF" }}>오일</ScrollText>
          </ScrollIconWrapper>
        ) : (
          <ScrollIconWrapperPress
            onPress={() => props.onPressListCategory("오일")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/oil.png")}
            />
            <ScrollText>오일</ScrollText>
          </ScrollIconWrapperPress>
        )}
        {tagId === "도서" ? (
          <ScrollIconWrapper onPress={() => props.onPressListCategory("도서")}>
            <ScrollIcon
              source={require("../../../public/images/list/book_on.png")}
            />
            <ScrollText style={{ color: "#FFFFFF" }}>도서</ScrollText>
          </ScrollIconWrapper>
        ) : (
          <ScrollIconWrapperPress
            onPress={() => props.onPressListCategory("도서")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/book.png")}
            />
            <ScrollText>도서</ScrollText>
          </ScrollIconWrapperPress>
        )}
        {tagId === "수면용품" ? (
          <ScrollIconWrapper
            onPress={() => props.onPressListCategory("수면용품")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/eyepatch_on.png")}
            />
            <ScrollText style={{ color: "#FFFFFF" }}>수면 용품</ScrollText>
          </ScrollIconWrapper>
        ) : (
          <ScrollIconWrapperPress
            onPress={() => props.onPressListCategory("수면용품")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/eyepatch.png")}
            />
            <ScrollText>수면 용품</ScrollText>
          </ScrollIconWrapperPress>
        )}
        {tagId === "수면보조제" ? (
          <ScrollIconWrapper
            onPress={() => props.onPressListCategory("수면보조제")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/pill_on.png")}
            />
            <ScrollText style={{ color: "#FFFFFF" }}>수면 보조제</ScrollText>
          </ScrollIconWrapper>
        ) : (
          <ScrollIconWrapperPress
            onPress={() => props.onPressListCategory("수면보조제")}
          >
            <ScrollIcon
              source={require("../../../public/images/list/pill.png")}
            />
            <ScrollText>수면 보조제</ScrollText>
          </ScrollIconWrapperPress>
        )}
      </ScrollView>
    </ScrollViewWrapper>
  );
};

export default HeaderAnimation;
