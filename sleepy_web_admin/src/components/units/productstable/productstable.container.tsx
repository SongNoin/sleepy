import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductstableUI from "./productstable.presenter";
import {
  FETCH_USED_ITEMS_I_SOLD,
  DELETE_USED_ITEM,
} from "./productstable.queries";

export default function Productstable() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 1 },
  });

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  function onClickMovetoUpdateProduct(event) {
    router.push(`/productDetail/${event.target.id}/edit`);
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
    />
  );
}
