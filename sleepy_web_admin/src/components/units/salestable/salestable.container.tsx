import { useQuery } from "@apollo/client";
import { useState } from "react";
import SalestableUI from "./salestable.presenter";
import {
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
} from "./salestable.queries";

export default function Salestable() {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING, {
    variables: { page: startPage },
  });

  const { data: pagecountData } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING
  );

  const lastPage = Math.ceil(
    pagecountData?.fetchPointTransactionsCountOfSelling / 10
  );

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
    });
    setCurrentPage(Number(event.target.id));
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  return (
    <SalestableUI
      data={data}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
      startPage={startPage}
      lastPage={lastPage}
      refetch={refetch}
      currentPage={currentPage}
    />
  );
}
