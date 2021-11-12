import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 900px;
  border: 1px solid red;
  border: none;
  font-size: 12px;
  margin-left: 20px;
  border-top: 2px solid black;
  /* border-bottom: 2px solid black; */
  padding-top: 10px;
`;

export const RowCategory = styled.div`
  height: 27px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 900;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
`;

export const Row = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const ColumnDate = styled.div`
  width: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const ColumnCategory = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ColumnStatus = styled.div`
  width: 12%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const ColumnHistory = styled.div`
  width: 16%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const ClounmBalance = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid red; */
`;
