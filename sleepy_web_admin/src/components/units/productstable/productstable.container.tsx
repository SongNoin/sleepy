import { useQuery } from "@apollo/client";
import ProductstableUI from "./productstable.presenter";
import { FETCH_USED_ITEMS_I_SOLD } from "./productstable.queries";

export default function Productstable() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 1 },
  });

  return <ProductstableUI data={data} />;
}
