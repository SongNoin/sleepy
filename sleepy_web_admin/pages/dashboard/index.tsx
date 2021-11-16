import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGEDIN } from "../../src/components/commons/layout/sidebar/sidebar.queries";
import AdminDashboard from "../../src/components/units/admindashboard/admindashboard.container";
import SellerDashboard from "../../src/components/units/sellerdashboard/sellerdashboard.container";

export default function DashboardPage() {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  return (
    <>
      {data?.fetchUserLoggedIn.name[0] === "#" ? (
        <AdminDashboard />
      ) : (
        <SellerDashboard />
      )}
    </>
  );
}
