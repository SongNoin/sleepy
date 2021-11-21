import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 830px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 480px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 20px 50px rgba(91, 91, 192, 0.15);
  border-radius: 15px;
`;

export const Logo = styled.img`
  width: 148px;
  height: 70px;
  margin-top: 67px;
`;

export const MainTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 36px;
`;

export const Line = styled.div`
  width: 98px;
  height: 0px;
  border: 1px solid #5b5bc0;
`;

export const TitleText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  margin-left: 18px;
  margin-right: 18px;

  color: #5b5bc0;
`;
export const MainInput = styled.input`
  width: 339px;
  height: 48px;
  border: 1px solid #5b5bc0;
  border-radius: 8px;

  margin-top: 4px;
  padding-left: 10px;
`;

export const MainLabel = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 4px;

  color: #5b5bc0;
`;

export const MainButton = styled.button`
  width: 339px;
  height: 48px;

  background: #5b5bc0;
  border: 1px solid #5b5bc0;

  border-radius: 8px;

  font-family: NotoSans-Bold;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;

  margin-top: 42px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  margin-top: 18px;
`;
export const SignupButton = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #3c3c3c;

  margin-top: 16px;
  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 14px;
  line-height: 19px;
  color: red;
  margin-top: 4px;
`;
