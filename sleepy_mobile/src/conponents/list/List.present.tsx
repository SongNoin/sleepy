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

const ListUI = () => {
  const navigation = useNavigation();

  return (
    <ListView>
      <HeaderAnimation />
      <ScrollView>
        <DetailProductWrapper>
          <ProductImageWrapper
            onPress={() => navigation.navigate("상품 상세보기")}
          >
            <ProductImage
              source={require("../../../public/images/list/productimage.png")}
            />
          </ProductImageWrapper>
          <InfoWrapper>
            <InfoTextWrapper>
              <InfoTitle>
                글자는 띄어쓰기 포함 이정도로 맞추면 될 것 같아요.
              </InfoTitle>
              <InfoPrice>1999999999999999999999원</InfoPrice>
            </InfoTextWrapper>
            <InfoFavoriteImage
              source={require("../../../public/images/list/infofavorite.png")}
            />
          </InfoWrapper>
        </DetailProductWrapper>
        <DetailProductWrapper>
          <ProductImageWrapper>
            <ProductImage
              source={require("../../../public/images/list/productimage.png")}
            />
          </ProductImageWrapper>
          <InfoWrapper>
            <InfoTextWrapper>
              <InfoTitle>
                글자는 띄어쓰기 포함 이정도로 맞추면 될 것 같아요.
              </InfoTitle>
              <InfoPrice>1999999999999999999999원</InfoPrice>
            </InfoTextWrapper>
            <InfoFavoriteImage
              source={require("../../../public/images/list/infofavorite.png")}
            />
          </InfoWrapper>
        </DetailProductWrapper>
        <DetailProductWrapper>
          <ProductImageWrapper>
            <ProductImage
              source={require("../../../public/images/list/productimage.png")}
            />
          </ProductImageWrapper>
          <InfoWrapper>
            <InfoTextWrapper>
              <InfoTitle>
                글자는 띄어쓰기 포함 이정도로 맞추면 될 것 같아요.
              </InfoTitle>
              <InfoPrice>1999999999999999999999원</InfoPrice>
            </InfoTextWrapper>
            <InfoFavoriteImage
              source={require("../../../public/images/list/infofavorite.png")}
            />
          </InfoWrapper>
        </DetailProductWrapper>
      </ScrollView>
    </ListView>
  );
};

export default ListUI;
