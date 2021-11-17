import { gql } from "@apollo/client";

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      userPoint {
        amount
      }
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;
