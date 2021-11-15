import { useMutation, useQuery } from "@apollo/client";
import ProductstableUI from "./productstable.presenter";
import {
  FETCH_USED_ITEMS_I_SOLD,
  DELETE_USED_ITEM,
} from "./productstable.queries";

export default function Productstable() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 1 },
  });

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  async function onClickDelete(e) {
    try {
      await deleteUseditem({
        variables: {
          useditemId: e.target.id,
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

  return <ProductstableUI data={data} onClickDelete={onClickDelete} />;
}
