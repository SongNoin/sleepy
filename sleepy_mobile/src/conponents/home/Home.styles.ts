import styled from "@emotion/native";

export const HomeView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  width: 100%;
`;
export const HomeText = styled.Text`
  font-size: 50px;
  color: red;
`;

export const MainBanner = styled.Image`
  width: 339px;
  height: 100px;
`;

export const MainBannerWrapper = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const BestProductWrapper = styled.View`
  margin-top: 32px;
  width: 339px;
`;

export const NewProductWrapper = styled.View`
  margin-top: 32px;
  width: 100%;
`;

export const BestProductTitle = styled.Text`
  width: 339px;
  height: 25px;
  font-weight: bold;
  font-style: normal;
  font-family: "NotoSans-Bold";
  font-size: 18px;
  line-height: 25px;
  color: #3b3b3b;
  /* padding-left: 18px; */
`;

export const NewProductInfoWrapper = styled.View``;

export const NewProductInfoWrapper2 = styled.View``;

export const MiddleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

export const MiddleWrapper2 = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const MoreProduct = styled.TouchableOpacity`
  width: 339px;
  height: 70px;
  background: #f1eef6;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoreProductText = styled.Text`
  width: 100px;
  height: 25px;
  font-weight: 600;
  font-size: 18px;
  color: #685b7e;
  text-align: center;
`;

export const CloseProduct = styled.TouchableOpacity`
  width: 339px;
  height: 70px;
  background: #f1eef6;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseProductText = styled.Text`
  width: 100px;
  height: 25px;
  font-weight: 600;
  font-size: 18px;
  color: #685b7e;
  text-align: center;
`;
