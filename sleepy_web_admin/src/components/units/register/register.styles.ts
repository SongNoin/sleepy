import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const DetailText = styled(ReactQuill)`
  height: 190px;
  width: 1096px;
  padding-bottom: 40px;
  border: 2px solid #5b5bc0;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 32px 0px 64px 72px;
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
  width: 1476px;
  background-color: white;
`;

export const BasicWrapper = styled.div`
  border-bottom: 1px solid #bbbae2;
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  border-bottom: 1px solid #bbbae2;
  width: 100%;
  height: 228px;
  display: flex;
  flex-direction: row;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
`;

export const LeftWrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: #5b5bc0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const LeftBasicWrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: #5b5bc0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 26px;
`;

export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightContentWrapper = styled.div`
  width: 100%;
  padding: 16px 0px 0px 40px;
`;

export const NameInput = styled.input`
  width: 548px;
  height: 54px;
  margin-left: 40px;
  border: 2px solid #5b5bc0;
  padding-left: 32px;
`;

export const Name = styled.div`
  color: white;
  margin-right: 28px;
`;

export const UploadImage = styled.div`
  /* border: 1px solid red; */
  margin-left: 40px;
  display: flex;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const UploadButton = styled.button`
  border: 1px solid #5b5bc0;
  width: 339px;
  height: 48px;
  color: white;
  background-color: #5b5bc0;
  /* border-radius: 8px; */

  font-size: 18px;
  margin-top: 30px;
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;
