import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5fb;
`;

export const MainLogoImage = styled.img`
  width: 400px;

  margin-top: 100px;
  margin-right: 30px;
`;

export const MoveButtonWrapper = styled.div`
  margin-top: 100px;
`;

export const MoveButton = styled.button`
  width: 200px;
  height: 50px;
  background: #5b5bc0;
  border-radius: 5px;
  border: none;

  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
  margin-right: 30px;

  cursor: pointer;
`;
