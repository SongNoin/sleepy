import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import ProductstableUI from "./productstable.presenter";
import {
  FETCH_USED_ITEMS_I_SOLD,
  DELETE_USED_ITEM,
} from "./productstable.queries";

export default function Productstable() {
  const router = useRouter;
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 1 },
  });

  console.log("dd:", data);

  const onClickDelete = () => () => {
    // data = data.filter((cur) => {
    //   return cur._id !== data._id;
    // });
  };

  return <ProductstableUI data={data} onClickDelete={onClickDelete} />;
}
