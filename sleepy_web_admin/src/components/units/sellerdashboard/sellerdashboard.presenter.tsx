import {
  Wrapper,
  Title,
  InnerWrapper,
  HeaderPart,
  ProductCountLabel,
  ProductCount,
  SalesCountLabel,
  SalesCount,
  TotalAmountLabel,
  TotalAmount,
  FooterPart,
  WrapperHeader,
  WrapperFooter,
} from "./sellerdashboard.styles";
export default function DashboardUI(props) {
  return (
    <>
      <Wrapper>
        <Title>판매자 대쉬보드</Title>
        <InnerWrapper>
          <WrapperHeader>
            <HeaderPart>
              <ProductCountLabel>총 상품 개수</ProductCountLabel>
              <ProductCount></ProductCount>
            </HeaderPart>
            <HeaderPart>
              <SalesCountLabel>판매 갯수</SalesCountLabel>
              <SalesCount>
                {props.productCountData?.fetchUseditemsCountISold} 개
              </SalesCount>
            </HeaderPart>
            <HeaderPart>
              <TotalAmountLabel>총 수익</TotalAmountLabel>
              <TotalAmount>
                {props.amountData?.fetchUserLoggedIn.userPoint.amount} 원
              </TotalAmount>
            </HeaderPart>
          </WrapperHeader>
          <WrapperFooter>
            <FooterPart></FooterPart>
            <FooterPart></FooterPart>
          </WrapperFooter>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
