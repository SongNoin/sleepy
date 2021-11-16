import {
  Wrapper,
  Title,
  InnerWrapper,
  ItemContent,
  RowCategory,
  ColumnIndexRow,
  ColumnCategoryRow,
  ColumnNameRow,
  CloumnDateRow,
  ColumnPriceRow,
  ColumnIndex,
  ColumnCategory,
  ColumnImageRow,
  ColumnImage,
  FakeImage,
  ColumnName,
  ColumnSale,
  ColumnSaleRow,
  ColumnPrice,
  CloumnDate,
  Row,
} from "./salestable.styles";

export default function SalestableUI(props) {
  return (
    <>
      <Wrapper>
        <Title>판매 현황</Title>
        <InnerWrapper>
          <ItemContent>
            <RowCategory>
              <ColumnIndex>NO</ColumnIndex>
              <ColumnCategory>카테고리</ColumnCategory>
              <ColumnImageRow>상품이미지</ColumnImageRow>
              <ColumnName>상품명</ColumnName>
              <ColumnSale>수익내역</ColumnSale>
              <CloumnDate>거래일</CloumnDate>
              <ColumnPrice>잔액</ColumnPrice>
              {/* <ColumnModify>수정/삭제</ColumnModify> */}
            </RowCategory>
            {props.data?.fetchPointTransactionsOfSelling.map((el, index) => (
              <Row key={el._id}>
                <ColumnIndexRow>{10 - index}</ColumnIndexRow>
                <ColumnCategoryRow>{el.useditem.tags}</ColumnCategoryRow>
                <ColumnImage>
                  <FakeImage src="/images/bag2.png" />
                </ColumnImage>
                <ColumnNameRow>{el.useditem.name}</ColumnNameRow>
                <ColumnSaleRow>+{el.amount.toLocaleString("ko-KR")}</ColumnSaleRow>
                <CloumnDateRow>
                  {el.createdAt.slice(0, 10)} {el.createdAt.slice(11, 19)}
                </CloumnDateRow>
                <ColumnPriceRow>
                  ₩
                  {el.balance
                    .toLocaleString("ko-KR")
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  {/* ₩{el.balance.toLocaleString("ko-KR")} */}
                </ColumnPriceRow>
              </Row>
            ))}
          </ItemContent>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
