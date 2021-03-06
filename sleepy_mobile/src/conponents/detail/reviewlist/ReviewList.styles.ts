import styled from "@emotion/native";

export const InnerWrapper = styled.View`
  align-items: center;
  margin-bottom: 6%;
`;

export const ReviewWrapper = styled.View`
  width: 339px;
  height: 160px;
  border: 2px solid #f1eef7;
  border-radius: 13px;
  padding: 11px;
  background-color: white;
`;

export const InnerTopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 5%;
`;

export const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin-right: 2%;
  width: 12%;
`;

export const TopMiddleWrapper = styled.View`
  width: 60%;
`;

export const Nickname = styled.Text`
  font-weight: 600;
  font-style: normal;
  font-size: 14px;
  line-height: 19.07px;
  color: black;
  margin-bottom: 1%;
`;

export const Star = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ReviewStar = styled.Image`
  width: 16.88px;
  height: 16.16px;
  margin-right: 3.12px;
`;

export const Photos = styled.View`
  width: 8%;
  display: flex;
`;

export const AddPhoto = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  /* border: 1px solid red; */
`;

export const BigAddPhoto = styled.Image`
  position: absolute;
  right: -20px;

  width: 140px;
  height: 140px;
  border-radius: 8px;
`;
export const AddPhotoButton = styled.TouchableOpacity``;
export const NoPhoto = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: #f1eef7;
`;

export const BottomWrapper = styled.View``;

export const ContentTitle = styled.Text`
  font-weight: 600;
  font-style: normal;
  font-size: 10px;
  line-height: 13.62px;
  color: #5b5bc0;
  margin-bottom: 2%;
`;

export const ReviewContent = styled.Text`
  font-weight: 500;
  font-style: normal;
  font-size: 10px;
  line-height: 13.62px;
  color: #a3a3a3;
`;
