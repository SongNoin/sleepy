import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 100%;
  height: 1100px;
  padding: 32px 0px 64px 72px;
  /* border: 1px solid red; */
  background-color: #f6f6fb;
`;
export const ModifyTitle = styled.div`
  font-family: NotoSans-Bold;
  margin-bottom: 32px;
  font-weight: 600;
  font-style: normal;
  font-size: 20px;
`;
export const ModifyWrapper = styled.div`
  width: 1476px;
  /* border: 4px solid blue; */
  background-color: white;
`;
export const Title = styled.div`
  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const Label = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

export const Input = styled.input`
  width: 300px;
  height: 52px;
  background: #e0e0e0;
  border: none;
  margin-right: 30px;
  padding-left: 15px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;

export const NameWrapper = styled.div`
  margin-top: 80px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-right: 250px;
`;

export const ModifyButton = styled.button`
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

export const WrapperHeader = styled.div`
  display: flex;
`;
export const Header = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border: 3px solid #f5f5fb;
  padding-top: 32px;
  padding-bottom: 30px;
  padding-left: 64px;
  padding-right: 64px;
`;

export const WrapperBody = styled.div`
  padding-top: 32px;
  padding-bottom: 30px;
  padding-left: 64px;
  padding-right: 64px;
  border: 3px solid #f5f5fb;
`;
