import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGEDIN } from "../sidebar/sidebar.queries";
import HeaderUI from "./header.presenter";

export default function Header() {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  return <HeaderUI data={data} />;
}
