import styled from "@emotion/native";

export const FavoriteView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding-bottom: 20px;
`;

export const FavoriteCountWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 24px;
`;
export const FavoriteCount = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #5b5bc0;
  margin-right: 15px;
`;
export const FavoriteCountContent = styled.Text`
  font-family: "NotoSans-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #8c8c8c;
  margin-right: 5px;
`;

export const FavoriteCountUnit = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #5b5bc0;
`;

export const FavoriteListWrapper = styled.View``;
export const FavoriteCard = styled.View`
  width: 339px;
  height: 140px;

  border: 1px solid #e2e2ff;
  box-shadow: 0px 4px 8px black;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 12px;
  padding-left: 25px;
`;
export const FavoriteImage = styled.Image`
  width: 110px;
  height: 105px;
  border-radius: 15px;
`;
export const FavoriteContent = styled.View`
  margin-left: 15px;
  display: flex;
`;
export const FavoriteName = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #3c3c3c;
  margin-bottom: 20px;
`;
export const FavoritePrice = styled.Text`
  font-family: "NotoSans-Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #5b5bc0;
`;
