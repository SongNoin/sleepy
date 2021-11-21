import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductstableUI from "./productstable.presenter";
import {
  FETCH_USED_ITEMS_I_SOLD,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
} from "./productstable.queries";

export default function Productstable() {
  const router = useRouter();

  const [isId, setIsId] = useState("");

  const { data: fetchData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: isId },
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderColor: "#5b5bc0",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(event) {
    setIsOpen(true);
    setIsId(event.currentTarget.id);
    console.log(isId);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 0 },
  });

  function onloadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditemsISold.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditemsISold: [
            ...prev.fetchUseditemsISold,
            ...fetchMoreResult.fetchUseditemsISold,
          ],
        };
      },
    });
  }

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  function onClickMovetoUpdateProduct(event) {
    event.stopPropagation();
    router.push(`/productDetail/${event.target.id}/edit`);
  }

  async function onClickDelete(event) {
    event.stopPropagation();
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
      customStyles={customStyles}
      modalIsOpen={modalIsOpen}
      openModal={openModal}
      afterOpenModal={afterOpenModal}
      closeModal={closeModal}
      fetchData={fetchData}
      onloadMore={onloadMore}
    />
  );
}
