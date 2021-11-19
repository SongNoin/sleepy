import styled from "@emotion/styled";

export const TempImage = styled.img`
  width: 165px;
  height: 165px;
  border-radius: 15px;
  border: 1px solid #5b5bc0;
  cursor: pointer;
  margin-right: 10px;
`;

export const TempWrapper = styled.div`
  height: 190px;
  display: flex;
  width: 100%;
  /* justify-content: center; */
  /* background-color: #f5f5fb; */
  margin-top: 40px;

  justify-content: space-between;
  /* padding: 10px; */
`;

export const TempMiddleWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropZoneWrapper = styled.div`
  text-align: center;
  padding: 20px;
  border: 3px dashed #5b5bc0;
  background-color: #f5f5fb;
  color: #5b5bc0;
  width: 1050px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
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

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const PrevImageWrapper = styled.div`
  width: 1050px;
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  /* ::-webkit-scrollbar {
    width: 3px;
  } */
`;
