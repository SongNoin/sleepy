import { useQuery } from "@apollo/client";
import SalestableUI from "./salestable.presenter";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "./salestable.queries";

export default function Salestable() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING, {
    variables: { page: 1 },
  });
  return <SalestableUI data={data} />;
}
