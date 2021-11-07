import React from "react";

import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

const CategofyMainWrapper = styled.View`
  margin-top: 22px;
  width: 298px;
  height: 102px;
`;

const CategoryMiddleWrapper = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CategoryIconWrapper = styled.TouchableOpacity`
  width: 67px;
  height: 46px;
  background-color: #f1eef6;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryIcon = styled.Image`
  width: 26px;
  height: 26px;
`;

const CategoryText = styled.Text`
  width: 38px;
  height: 11px;
  font-size: 8px;
  font-weight: bold;
  text-align: center;
  color: #4d4d72;
`;

const Category = () => {
  const navigation = useNavigation();

  return (
    <CategofyMainWrapper>
      <CategoryMiddleWrapper>
        <CategoryIconWrapper onPress={() => navigation.navigate("상품 리스트")}>
          <CategoryIcon
            source={require("../../../public/images/home/pillow.png")}
          />
          <CategoryText>배게</CategoryText>
        </CategoryIconWrapper>
        <CategoryIconWrapper onPress={() => navigation.navigate("상품 리스트")}>
          <CategoryIcon
            source={require("../../../public/images/home/blankits.png")}
          />
          <CategoryText>이불</CategoryText>
        </CategoryIconWrapper>
        <CategoryIconWrapper onPress={() => navigation.navigate("상품 리스트")}>
          <CategoryIcon
            source={require("../../../public/images/home/courtain.png")}
          />
          <CategoryText>암막커튼</CategoryText>
        </CategoryIconWrapper>
        <CategoryIconWrapper onPress={() => navigation.navigate("상품 리스트")}>
          <CategoryIcon
            source={require("../../../public/images/home/pajamas.png")}
          />
          <CategoryText>수면잠옷</CategoryText>
        </CategoryIconWrapper>
      </CategoryMiddleWrapper>
      <CategoryMiddleWrapper>
        <CategoryIconWrapper onPress={() => navigation.navigate("상품 리스트")}>
          <CategoryIcon
            source={require("../../../public/images/home/oil.png")}
          />
          <CategoryText>오일</CategoryText>
        </CategoryIconWrapper>
        <CategoryIconWrapper onPress={() => navigation.navigate("상품 리스트")}>
          <CategoryIcon
            source={require("../../../public/images/home/book.png")}
          />
          <CategoryText>도서</CategoryText>
        </CategoryIconWrapper>
        <CategoryIconWrapper onPress={() => navigation.navigate("상품 리스트")}>
          <CategoryIcon
            source={require("../../../public/images/home/eyepatch.png")}
          />
          <CategoryText>수면용품</CategoryText>
        </CategoryIconWrapper>
        <CategoryIconWrapper onPress={() => navigation.navigate("상품 리스트")}>
          <CategoryIcon
            source={require("../../../public/images/home/pill.png")}
          />
          <CategoryText>수면보조제</CategoryText>
        </CategoryIconWrapper>
      </CategoryMiddleWrapper>
    </CategofyMainWrapper>
  );
};

export default Category;
