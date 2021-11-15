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
  ColumnSold,
  ColumnSell,
  ColumnPrice,
  CloumnDate,
  ColumnModify,
  ModifyButton,
  DeleteButton,
  Row,
  ColumnModifyNone,
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
            <ColumnImageRow>상품이미지</ColumnImageRow>
            <ColumnName>상품명</ColumnName>
            <ColumnSale>판매여부</ColumnSale>
            <CloumnDate>날짜</CloumnDate>
            <ColumnPrice>판매가격</ColumnPrice>
            <ColumnModify>수정/삭제</ColumnModify>
          </RowCategory>
          {props.data?.fetchUseditemsISold.map((el, index) => (
            <Row key={el._id}>
              <ColumnIndexRow>{10 - index}</ColumnIndexRow>
              <ColumnCategoryRow>{el.tags}</ColumnCategoryRow>
              <ColumnImage>
                <FakeImage src="/images/bag2.png" />
              </ColumnImage>
              <ColumnNameRow>{el.name}</ColumnNameRow>
              {el.buyer?.name ? (
                <ColumnSold>{el.buyer?.name && "판매완료"}</ColumnSold>
              ) : (
                <ColumnSell>판매중</ColumnSell>
              )}
              <CloumnDateRow>
                {el.createdAt.slice(0, 10)} {el.createdAt.slice(11, 19)}
              </CloumnDateRow>
              <ColumnPriceRow>
                ₩{" "}
                {el.price
                  .toLocaleString("ko-KR")
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </ColumnPriceRow>
              <ColumnModify>
                {!el.buyer?.name ? (
                  <>
                    {" "}
                    <ModifyButton>수정</ModifyButton>
                    <DeleteButton onClick={props.onClickDelete} id={el._id}>
                      삭제
                    </DeleteButton>{" "}
                  </>
                ) : (
                  <ColumnModifyNone>수정/삭제 불가</ColumnModifyNone>
                )}
              </ColumnModify>
            </Row>
          ))}
        </ItemContent>
      </InnerWrapper>
    </Wrapper>
  );
}
