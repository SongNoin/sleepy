import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductstableUI from "./productstable.presenter";
import {
  FETCH_USED_ITEMS_I_SOLD,
  DELETE_USED_ITEM,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
} from "./productstable.queries";

export default function Productstable() {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: startPage },
  });

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const { data: pagecountData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);

  const lastPage = Math.ceil(pagecountData?.fetchUseditemsCountISold / 10);

  function onClickMovetoUpdateProduct(event) {
    router.push(`/productDetail/${event.target.id}/edit`);
  }

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

  async function onClickDelete(event) {
    try {
      await deleteUseditem({
        variables: {
          useditemId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_I_SOLD,
            variables: { page: 1 },
          },
        ],
      });
      alert("삭제되었습니다!");
    } catch (error: any) {}
  }

  return (
    <ProductstableUI
      data={data}
      onClickMovetoUpdateProduct={onClickMovetoUpdateProduct}
      onClickDelete={onClickDelete}
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
