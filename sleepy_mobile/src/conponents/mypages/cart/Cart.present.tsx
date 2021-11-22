import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  MyCartView,
  CartListWrapper,
  CartCard,
  CartImage,
  CartContent,
  CartName,
  CartPrice,
  CartImageWrapper,
  DelButton,
  BuyButton,
  BuyButtonText,
  EmptyWrapper,
  EmptyText,
} from "./Cart.styles";
import { Text } from "react-native";
import DeleteIcon from "react-native-vector-icons/AntDesign";

const CartUI = (props: any) => {
  const navigation = useNavigation();
  const soldOutList = props.soldOutList?.map((el: any) => el._id);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <MyCartView>
        <CartListWrapper>
          {(!props.productInfo || props.productInfo?.length === 0) && (
            <EmptyWrapper>
              <EmptyText>장바구니가 비어있습니다!</EmptyText>
            </EmptyWrapper>
          )}

          {props.productInfo
            ?.map((el: any) => (
              <CartCard isSoldOut={soldOutList?.includes(el.id)} key={el.id}>
                <CartImageWrapper
                  onPress={() => {
                    if (!soldOutList?.includes(el.id)) {
                      navigation.navigate("상품 상세보기", {
                        id: props.onPressDetail(el),
                      });
                    }
                  }}
                >
                  <CartImage
                    source={{
                      uri: `https://storage.googleapis.com/${el.images[0]}`,
                    }}
                  />
                </CartImageWrapper>
                <CartContent>
                  <CartName
                    onPress={() => {
                      if (!soldOutList?.includes(el.id)) {
                        navigation.navigate("상품 상세보기", {
                          id: props.onPressDetail(el),
                        });
                      }
                    }}
                  >
                    {el.productName.split("#")[1].length > 9
                      ? `${el.productName.split("#")[1].substr(0, 10)}..`
                      : el.productName.split("#")[1]}
                  </CartName>

                  <CartPrice
                    onPress={() => {
                      if (!soldOutList?.includes(el.id)) {
                        navigation.navigate("상품 상세보기", {
                          id: props.onPressDetail(el),
                        });
                      }
                    }}
                  >{`${el.productPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</CartPrice>

                  {!soldOutList?.includes(el.id) && (
                    <BuyButton onPress={props.buyMyFavoritePr(el)}>
                      <BuyButtonText>구매하기</BuyButtonText>
                    </BuyButton>
                  )}

                  <DelButton onPress={props.deleteMyFavoritePr(el)}>
                    <Text>
                      <DeleteIcon name="close" size={20} color="black" />
                    </Text>
                  </DelButton>
                </CartContent>
              </CartCard>
            ))
            .reverse()}
        </CartListWrapper>
      </MyCartView>
    </ScrollView>
  );
};

export default CartUI;
