import React from "react";

import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

export const DetailProduct = styled.TouchableOpacity`
  width: 160px;
  height: 135px;
  border: 1px solid #e8e8e8;
  background-color: #e8e8e8;
  border-radius: 15px;
`;

export const DetailProductWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: 10px;
  /* margin-left: 20px; */
`;

export const ProductImage = styled.Image`
  border-radius: 15px;
  width: 100%;
  height: 100%;
`;

export const InformationWrapper = styled.View``;

export const ProductTitle = styled.Text`
  width: 122px;
  height: 16px;
  font-size: 12px;
  color: #3c3c3c;
`;

export const FavoriteImage = styled.Image`
  width: 15.72px;
  height: 16.97px;
`;

export const ContentsWrapper = styled.View`
  width: 160px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
`;

export const ProductPrice = styled.Text`
  width: 100px;
  height: 18px;
  color: #5b5bc0;
  font-weight: 600;
`;

const BestItem = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <DetailProductWrapper>
        {props.bestData?.fetchUseditemsOfTheBest
          .slice(0, 2)
          .map((el, index) => (
            <InformationWrapper key={el._id}>
              <>
                <DetailProduct
                  onPress={() =>
                    navigation.navigate("상품 상세보기", {
                      id: props.onPressDetail(el),
                    })
                  }
                >
                  <ProductImage
                    source={{
                      uri: `https://storage.googleapis.com/${el.images[0]}`,
                    }}
                  />
                </DetailProduct>
                <ContentsWrapper>
                  <ProductTitle>{el.name.split("#")[1]}</ProductTitle>
                  <FavoriteImage
                    source={require("../../../public/images/home/moon-off.png")}
                  />
                </ContentsWrapper>
                <ProductPrice>{el.price}원</ProductPrice>
              </>
            </InformationWrapper>
          ))}
      </DetailProductWrapper>
      <DetailProductWrapper>
        {props.bestData?.fetchUseditemsOfTheBest
          .slice(2, 4)
          .map((el, index) => (
            <InformationWrapper key={el._id}>
              <>
                <DetailProduct
                  onPress={() =>
                    navigation.navigate("상품 상세보기", {
                      id: props.onPressDetail(el),
                    })
                  }
                >
                  <ProductImage
                    source={{
                      uri: `https://storage.googleapis.com/${el.images[0]}`,
                    }}
                  />
                </DetailProduct>
                <ContentsWrapper>
                  <ProductTitle>{el.name.split("#")[1]}</ProductTitle>
                  <FavoriteImage
                    source={require("../../../public/images/home/moon-off.png")}
                  />
                </ContentsWrapper>
                <ProductPrice>{el.price}원</ProductPrice>
              </>
            </InformationWrapper>
          ))}
      </DetailProductWrapper>
    </>
  );
};

export default BestItem;
