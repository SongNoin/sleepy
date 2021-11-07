import styled from "@emotion/native";

export const HomeView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  width: 367px;
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

export const DetailProduct = styled.TouchableOpacity`
  width: 160px;
  height: 135px;
  border: 1px solid #e8e8e8;
  background-color: #e8e8e8;
  border-radius: 15px;
`;

export const ProductImage = styled.Image`
  border-radius: 15px;
`;

export const NewProductWrapper = styled.View`
  margin-top: 32px;
  width: 100%;
`;

export const NewProductTitle = styled.Text`
  width: 100%;
  height: 25px;
  font-weight: bold;
  font-size: 18px;
  color: #3b3b3b;
  padding-left: 18px;
`;

export const DetailProductWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

export const InformationWrapper = styled.View``;

export const ContentsWrapper = styled.View`
  width: 160px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
`;

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
export const ProductPrice = styled.Text`
  width: 100px;
  height: 16px;
  color: #5b5bc0;
  font-weight: 600;
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
`;
