import styled from "@emotion/native";

export const FavoriteView = styled.View`
  flex: 1;
  /* align-items: center; */
  background-color: white;
  padding-bottom: 20px;
`;

export const FavoriteCountWrapper = styled.View`
  width: 339px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: 18px;
  margin-right: 18px;
  margin-top: 24px;

  padding-bottom: 12px;
  padding-left: 9px;
  border-bottom-width: 2px;
  border-bottom-color: #f1eef6;
`;
export const FavoriteCount = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #3b3b3b;
`;
export const FavoriteCountContent = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  color: #5b5bc0;
  margin-right: 5px;
`;
export const FavoriteListWrapper = styled.View`
  display: flex;
  align-items: center;
`;
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
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #5b5bc0;
`;

