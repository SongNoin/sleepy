import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      price
      images
      tags
    }
  }
`;
