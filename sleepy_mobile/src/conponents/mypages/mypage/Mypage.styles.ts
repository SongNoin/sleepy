import styled from "@emotion/native";

export const MyMainView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;

  padding-right: 18px;
  padding-left: 18px;
`;

export const ProfileWrapper = styled.View`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProfileInfoWrapper = styled.View`
  margin-left: 24px;
`;

export const ProfileNameWapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProfileName = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;
export const ProfileNameNim = styled.Text`
  margin-left: 3px;
`;

export const ProfileEmailWrapper = styled.View`
  margin-top: 5px;
`;

export const ProfileEmail = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #3b3b3b;
`;
export const ProfileEmailContent = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;

export const ProfilePointWrapper = styled.View`
  margin-top: 5px;
`;
export const ProfilePoint = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #3b3b3b;
`;
export const ProfilePointContent = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #5b5bc0;
`;
export const IconBackGround = styled.TouchableOpacity`
  width: 56px;
  height: 50px;
  border-radius: 8px;
  background-color: #5b5bc0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.View`
  width: 75%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
  justify-content: space-between;
`;

export const InsertImage = styled.Image``;

export const HistoryWrapper = styled.View``;
export const HistoryTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
export const BuyHistory = styled.Text`
  margin-right: 26px;
`;
export const PointHistory = styled.Text``;
