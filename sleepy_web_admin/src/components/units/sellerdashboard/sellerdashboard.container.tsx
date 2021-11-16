import { useQuery } from "@apollo/client";
import DashboardUI from "./sellerdashboard.presenter";
import {
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  FETCH_USER_LOGGEDIN,
} from "./sellerdashboard.queries";

export default function SellerDashboard() {
  const { data: amountData } = useQuery(FETCH_USER_LOGGEDIN);
  const { data: productCountData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);
  return (
    <DashboardUI amountData={amountData} productCountData={productCountData} />
  );
}
