import { useQuery } from "@apollo/client";
import DashboardUI from "./dashboard.presenter";
import {
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  FETCH_USER_LOGGEDIN,
} from "./dashboard.queries";

export default function Dashboard() {
  const { data: amountData } = useQuery(FETCH_USER_LOGGEDIN);
  const { data: productCountData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);
  return (
    <DashboardUI amountData={amountData} productCountData={productCountData} />
  );
}
