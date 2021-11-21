import { useQuery } from "@apollo/client";
import DashboardUI from "./admindashboard.presenter";
import {
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  FETCH_USER_LOGGEDIN,
} from "./admindashboard.queries";

export default function AdminDashboard() {
  const { data: amountData } = useQuery(FETCH_USER_LOGGEDIN);
  const { data: productCountData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);
  return (
    <DashboardUI amountData={amountData} productCountData={productCountData} />
  );
}
