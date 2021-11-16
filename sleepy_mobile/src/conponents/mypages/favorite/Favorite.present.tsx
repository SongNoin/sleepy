import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import {
  FavoriteView,
  FavoriteCountWrapper,
  FavoriteCount,
  FavoriteCountContent,
  FavoriteListWrapper,
  FavoriteCard,
  FavoriteImage,
  FavoriteContent,
  FavoriteName,
  FavoritePrice,
} from "./Favorite.styles";

const FavoriteUI = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <FavoriteView>
        <FavoriteCountWrapper>
          <FavoriteCount>찜한 상품</FavoriteCount>
          <FavoriteCountContent>
            {props.pickCountData?.fetchUseditemsCountIPicked} 개
          </FavoriteCountContent>
        </FavoriteCountWrapper>
        <FavoriteListWrapper>
          {props.data?.fetchUseditemsIPicked.map((el) => (
            <FavoriteCard
              key={el._id}
              onPress={() => {
                navigation.navigate("상품 상세보기", {
                  id: props.onPressDetail(el),
                });
              }}
            >
              <FavoriteImage
                source={{
                  uri: `https://storage.googleapis.com/${el.images[0]}`,
                }}
              />
              <FavoriteContent>
                <FavoriteName>
                  {el.name.length > 9 ? `${el.name.substr(0, 10)}...` : el.name}
                </FavoriteName>
                <FavoritePrice>
                  {el.price.toLocaleString("ko-KR")} 원
                </FavoritePrice>
              </FavoriteContent>
            </FavoriteCard>
          ))}
        </FavoriteListWrapper>
      </FavoriteView>
    </ScrollView>
  );
};

export default FavoriteUI;
