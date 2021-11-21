import Modal from "react-modal";

import TableDetail from "../../commons/Modal/tableDetail.container";
import FilterDetail from "../../commons/filter/filterDetail";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import InfiniteScroll from "react-infinite-scroller";

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
  NoImage,
  NoImageImg,
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
  const { isSale } = useContext(GlobalContext);

  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={props.customStyles}
        ariaHideApp={false}
      >
        <TableDetail fetchData={props.fetchData} />
      </Modal>
      <Wrapper>
        <Title>상품 현황</Title>
        <InnerWrapper>
          <FilterDetail data={props.data} />
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onloadMore}
            hasMore={true}
          >
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
              {(isSale || props.data?.fetchUseditemsISold)?.map((el, index) => (
                <Row key={el._id} onClick={props.openModal} id={el._id}>
                  <ColumnIndexRow>{index + 1}</ColumnIndexRow>
                  <ColumnCategoryRow>{el.tags}</ColumnCategoryRow>
                  <ColumnImage>
                    {el?.images[0] ? (
                      <FakeImage
                        src={`https://storage.googleapis.com/${el?.images[0]}`}
                      />
                    ) : (
                      <NoImage>
                        <NoImageImg src="/images/logo.png" />
                      </NoImage>
                    )}
                  </ColumnImage>
                  <ColumnNameRow>{el.name.split("#")[1]}</ColumnNameRow>
                  {el.buyer?.name ? (
                    <ColumnSold>{el.buyer?.name && "판매완료"}</ColumnSold>
                  ) : (
                    <ColumnSell>판매중</ColumnSell>
                  )}
                  <CloumnDateRow>
                    {el.createdAt.slice(0, 10)} {el.createdAt.slice(11, 19)}
                  </CloumnDateRow>
                  <ColumnPriceRow>
                    ₩
                    {el.price
                      .toLocaleString("ko-KR")
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </ColumnPriceRow>
                  <ColumnModify>
                    {!el.buyer?.name ? (
                      <>
                        <ModifyButton
                          onClick={props.onClickMovetoUpdateProduct}
                          id={el._id}
                        >
                          수정
                        </ModifyButton>
                        <DeleteButton onClick={props.onClickDelete} id={el._id}>
                          삭제
                        </DeleteButton>
                      </>
                    ) : (
                      <ColumnModifyNone>수정/삭제 불가</ColumnModifyNone>
                    )}
                  </ColumnModify>
                </Row>
              ))}
            </ItemContent>
          </InfiniteScroll>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
