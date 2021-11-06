import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import {
  FavoriteView,
  FavoriteCountWrapper,
  FavoriteCount,
  FavoriteCountContent,
  FavoriteCountUnit,
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
          <FavoriteCount>찜 한 갯수 :</FavoriteCount>
          <FavoriteCountContent>1000</FavoriteCountContent>
          <FavoriteCountUnit>개</FavoriteCountUnit>
        </FavoriteCountWrapper>
        <FavoriteListWrapper>
          <FavoriteCard>
            <FavoriteImage
              source={require("../../../../public/images/mypage/buyhistoryproductphoto.png")}
            />
            <FavoriteContent>
              <FavoriteName>글자는띄어쓰기없이</FavoriteName>
              <FavoritePrice>199000원</FavoritePrice>
            </FavoriteContent>
          </FavoriteCard>
        </FavoriteListWrapper>
      </FavoriteView>
    </ScrollView>
  );
};

export default FavoriteUI;
