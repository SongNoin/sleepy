import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 300px;
  /* padding: 32px 36px 0px 32px; */
  /* background-color: beige; */
  padding-top: 32px;
`;

export const Line = styled.div`
  width: 85%;
  border-top: 1px solid #ededed;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 6%;
`;

export const Name = styled.div`
  font-family: "NotoSans-Bold";
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 21.79px;
  margin-bottom: 3%;
`;

export const Phrase = styled.div`
  font-family: "NotoSans-Regular";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 19.07px;
  color: #8c8c8c;
  margin-bottom: 9%;
`;

export const BottomWrapper = styled.div`
  padding-left: 36px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  margin: 15px 0px 15px 0px;
`;

export const SideMenuIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 15px;
`;

export const SideMenuButton = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* border: 1px solid black; */
`;
