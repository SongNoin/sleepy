import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 32px 32px 32px 32px;
  background-color: #f6f6fb;
`;

export const Title = styled.div`
  font-family: NotoSans-Bold;
  margin-bottom: 32px;
  font-weight: 900;
  font-style: normal;
  font-size: 20px;
`;

export const InnerWrapper = styled.div`
  width: 966px;
  background-color: white;
  font-size: 15px;
  border: 1px solid #bbbae2;
`;

export const BasicWrapper = styled.div`
  border-bottom: 1px solid #bbbae2;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  border-bottom: 1px solid #bbbae2;
  width: 100%;
  height: 194px;
  display: flex;
  flex-direction: row;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  height: 194px;
  display: flex;
  flex-direction: row;
`;

export const LeftWrapper = styled.div`
  width: 250px;
  height: 100%;
  background-color: #5b5bc0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const LeftBasicWrapper = styled.div`
  width: 250px;
  height: 100%;
  background-color: #5b5bc0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 26px;
`;

export const RightWrapper = styled.div`
  width: 695px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid red; */
`;

export const RightContentWrapper = styled.div`
  width: 676px;
  padding: 16px 0px 0px 18px;
`;

export const RightNameScrollInput = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #5b5bc0;
  padding-top: 12px;
  padding-left: 16px;
  padding: 9px 0px 12px 16px;
  margin-left: 18px;
`;

export const NameScrollInput = styled.div`
  width: 100%;
  height: 17px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 12px;
  }
`;

export const BasicInput = styled.div`
  width: 100%;
  height: 40px;
  margin-left: 18px;
  border-radius: 10px;
  border: 1px solid #5b5bc0;
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  color: white;
  margin-right: 28px;
`;

export const UploadImage = styled.img`
  margin-left: 20px;
  width: 140px;
  height: 140px;
  border: 1px solid #5b5bc0;
  border-radius: 15px;
`;

export const RightContentInput = styled.div`
  width: 676px;
  height: 160px;
  border-radius: 15px;
  border: 1px solid #5b5bc0;
  padding-top: 12px;
  padding-left: 16px;
  padding: 12px 0px 12px 16px;
`;

export const ContentInput = styled.div`
  /* border: 1px solid red; */
  width: 656px;
  height: 140px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 12px;
  }
`;
