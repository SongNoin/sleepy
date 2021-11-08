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

const FavoriteUI = () => {
  return (
    <ScrollView>
      <FavoriteView>
        <FavoriteCountWrapper>
          <FavoriteCount>찜한 상품</FavoriteCount>
          <FavoriteCountContent>9999+</FavoriteCountContent>
        </FavoriteCountWrapper>
        <FavoriteListWrapper>
          <FavoriteCard>
            <FavoriteImage
              source={require("../../../../public/images/mypage/buyhistoryproductphoto.png")}
            />
            <FavoriteContent>
              <FavoriteName>글자는띄어쓰기없이</FavoriteName>
              <FavoritePrice>199000 원</FavoritePrice>
            </FavoriteContent>
          </FavoriteCard>
        </FavoriteListWrapper>
      </FavoriteView>
    </ScrollView>
  );
};

export default FavoriteUI;
