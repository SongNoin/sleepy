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
  InfoPickedCount,
  FavoriteWrapper,
} from "./List.styles";

import HeaderAnimation from "./List.header.animation";

import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

const ListUI = (props) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    console.log(item);
    console.log("333", props.tagId);
    return (
      <>
        {item.tags[0] === props.tagId && (
          <DetailProductWrapper key={item._id}>
            <ProductImageWrapper
              onPress={() =>
                navigation.navigate("상품 상세보기", {
                  id: props.onPressDetail(item),
                })
              }
            >
              <ProductImage
                source={{
                  uri: `https://storage.googleapis.com/${item.images[0]}`,
                }}
              />
            </ProductImageWrapper>
            <InfoWrapper>
              <InfoTextWrapper>
                <InfoTitle>
                  {String(item.name.split("#")[1]).length > 9
                    ? `${item.name.split("#")[1].substr(0, 10)}...`
                    : item.name.split("#")[1]}
                </InfoTitle>
                <InfoPrice>{item.price.toLocaleString("ko-KR")}원</InfoPrice>
              </InfoTextWrapper>
              <FavoriteWrapper>
                {props.myPickData?.includes(item._id) ? (
                  <InfoFavoriteImage
                    source={require("../../../public/images/list/infofavorite_on.png")}
                  />
                ) : (
                  <InfoFavoriteImage
                    source={require("../../../public/images/list/infofavorite_off.png")}
                  />
                )}
                {/* <InfoPickedCount>{item.pickedCount}</InfoPickedCount> */}
              </FavoriteWrapper>
            </InfoWrapper>
          </DetailProductWrapper>
        )}
      </>
    );
  };

  return (
    <ListView>
      <HeaderAnimation onPressListCategory={props.onPressListCategory} />
      <FlatList
        data={props.data?.fetchUseditems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={props.onLoadMore}
        renderItem={renderItem}
      ></FlatList>
    </ListView>
  );
};

export default ListUI;
