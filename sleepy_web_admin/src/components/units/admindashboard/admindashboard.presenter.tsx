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
} from "./admindashboard.styles";
export default function AdminDashboardUI(props) {
  return (
    <>
      <Wrapper>
        <Title>관리자 대쉬보드</Title>
        <InnerWrapper>
          <WrapperHeader>
            <HeaderPart>
              <ProductCountLabel></ProductCountLabel>
              <ProductCount></ProductCount>
            </HeaderPart>
            <HeaderPart>
              <SalesCountLabel></SalesCountLabel>
              <SalesCount>
                {props.productCountData?.fetchUseditemsCountISold} 개
              </SalesCount>
            </HeaderPart>
            <HeaderPart>
              <TotalAmountLabel></TotalAmountLabel>
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
