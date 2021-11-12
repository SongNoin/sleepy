import {
  Wrapper,
  RowCategory,
  ColumnDate,
  ColumnCategory,
  ColumnStatus,
  ColumnHistory,
  ClounmBalance,
  Row,
} from "./salestable.styles";

export default function SalestableUI(props) {
  return (
    <>
      <Wrapper>
        <RowCategory>
          <ColumnDate>거래일</ColumnDate>
          <ColumnCategory>카테고리</ColumnCategory>
          <ColumnStatus>상품명</ColumnStatus>
          <ColumnHistory>거래내역</ColumnHistory>
          <ClounmBalance>거래 후 잔액</ClounmBalance>
        </RowCategory>
        {props.data?.fetchPointTransactionsOfSelling.map((el) => (
          <Row key={el._id}>
            <ColumnDate>{el.createdAt.slice(0, 10)}</ColumnDate>
            <ColumnCategory>{el.useditem.tags}</ColumnCategory>
            <ColumnStatus>{el.useditem.name}</ColumnStatus>
            <ColumnHistory>+{el.amount.toLocaleString("ko-KR")}</ColumnHistory>
            <ClounmBalance>₩{el.balance.toLocaleString("ko-KR")}</ClounmBalance>
          </Row>
        ))}
      </Wrapper>
    </>
  );
}
