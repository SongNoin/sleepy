import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGEDIN } from "../sidebar/sidebar.queries";
import HeaderUI from "./header.presenter";

export default function Header() {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const router = useRouter();
  const currentPage = router.pathname;

  return <HeaderUI data={data} currentPage={currentPage} />;
}
