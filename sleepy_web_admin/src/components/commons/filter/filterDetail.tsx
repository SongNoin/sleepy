import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import styled from "@emotion/styled";

const ChipStyle = styled(Chip)`
  background-color: #5b5bc0;
  color: white;
`;

export default function FilterDetail(props) {
  const { setIsSale } = useContext(GlobalContext);

  const handleClickAll = () => {
    const all = props.data?.fetchUseditemsISold;
    setIsSale(all);
  };

  const handleClickSale = () => {
    const sale = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.buyer === null
    );
    setIsSale(sale);
  };

  const handleClickSold = () => {
    const sold = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.buyer !== null
    );
    setIsSale(sold);
  };

  const handleClickPilow = () => {
    const Pilow = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.name.split("#")[0] === "배게"
    );
    setIsSale(Pilow);
  };

  const handleClickBlanket = () => {
    const Blanket = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.name.split("#")[0] === "이불"
    );
    setIsSale(Blanket);
  };

  const handleClickPajama = () => {
    const Pajama = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.name.split("#")[0] === "잠옷"
    );
    setIsSale(Pajama);
  };

  const handleClickBook = () => {
    const Book = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.name.split("#")[0] === "도서"
    );
    setIsSale(Book);
  };

  const handleClickCurtain = () => {
    const curtain = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.name.split("#")[0] === "암막커튼"
    );
    setIsSale(curtain);
  };

  const handleClickOil = () => {
    const Oil = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.name.split("#")[0] === "오일"
    );
    setIsSale(Oil);
  };

  const handleClickSupplies = () => {
    const Supplies = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.name.split("#")[0] === "수면 용품"
    );
    setIsSale(Supplies);
  };

  const handleClickPill = () => {
    const curtain = props.data?.fetchUseditemsISold?.filter(
      (el) => el?.name.split("#")[0] === "수면보조제"
    );
    setIsSale(curtain);
  };

  return (
    <Stack direction="row" spacing={1}>
      <ChipStyle label="ALL" onClick={handleClickAll} />
      <ChipStyle label="판매중" onClick={handleClickSale} />
      <ChipStyle label="판매완료" onClick={handleClickSold} />
      <ChipStyle label="배게" onClick={handleClickPilow} />
      <ChipStyle label="이불" onClick={handleClickBlanket} />
      <ChipStyle label="잠옷" onClick={handleClickPajama} />
      <ChipStyle label="도서" onClick={handleClickBook} />
      <ChipStyle label="암막커튼" onClick={handleClickCurtain} />
      <ChipStyle label="오일" onClick={handleClickOil} />
      <ChipStyle label="수면용품" onClick={handleClickSupplies} />
      <ChipStyle label="수면 보조제" onClick={handleClickPill} />
    </Stack>
  );
}
