import React from "react";

import {
  ListView,
  ProductImageWrapper,
  ProductImage,
  DetailProductWrapper,
  InfoWrapper,
  InfoTextWrapper,
  InfoFavoriteImage,
  InfoTitle,
  InfoPrice,
} from "./List.styles";

import HeaderAnimation from "./List.header.animation";

import { ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

const ListUI = (props) => {
  const navigation = useNavigation();

  return (
    <ListView>
      <HeaderAnimation />
      <ScrollView>
        {props.data?.fetchUseditems.map((el) => (
          <DetailProductWrapper key={el._id}>
            <ProductImageWrapper
              onPress={() => navigation.navigate("상품 상세보기")}
            >
              <ProductImage
                source={require("../../../public/images/list/productimage.png")}
              />
            </ProductImageWrapper>
            <InfoWrapper>
              <InfoTextWrapper>
                <InfoTitle>{el.name}</InfoTitle>
                <InfoPrice>{el.price}원</InfoPrice>
              </InfoTextWrapper>
              <InfoFavoriteImage
                source={require("../../../public/images/list/infofavorite.png")}
              />
            </InfoWrapper>
          </DetailProductWrapper>
        ))}
      </ScrollView>
    </ListView>
  );
};

export default ListUI;
