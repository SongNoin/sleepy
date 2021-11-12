import {
  Wrapper,
  Title,
  InnerWrapper,
  ItemContent,
  RowCategory,
  ColumnIndex,
  ColumnCategory,
  ColumnName,
  ColumnSale,
  ColumnSold,
  ColumnNone,
  ColumnPrice,
  CloumnDate,
  ColumnModify,
  Row,
} from "./productstable.styles";

export default function ProductstableUI(props) {
  return (
    <Wrapper>
      <Title>상품 현황</Title>
      <InnerWrapper>
        <ItemContent>
          <RowCategory>
            <ColumnIndex>NO</ColumnIndex>
            <ColumnCategory>카테고리</ColumnCategory>
            <ColumnCategory>상품이미지</ColumnCategory>
            <ColumnName>상품명</ColumnName>
            <ColumnSale>판매여부</ColumnSale>
            <CloumnDate>날짜</CloumnDate>
            <ColumnPrice>판매가격</ColumnPrice>
            <ColumnModify>수정/삭제</ColumnModify>
          </RowCategory>
          {props.data?.fetchUseditemsISold.map((el, index) => (
            <Row key={el._id}>
              <ColumnIndex>{10 - index}</ColumnIndex>
              <ColumnCategory>{el.tags}</ColumnCategory>
              <ColumnName>{el.name}</ColumnName>
              {el.buyer?.name ? (
                <ColumnSold>{el.buyer?.name && "SOLD OUT"}</ColumnSold>
              ) : (
                <ColumnNone />
              )}
              <CloumnDate>{el.createdAt.slice(0, 10)}</CloumnDate>
              <ColumnPrice>{el.price}</ColumnPrice>
            </Row>
          ))}
        </ItemContent>
      </InnerWrapper>
    </Wrapper>
  );
}
