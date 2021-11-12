import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($page: Int) {
    fetchPointTransactionsOfSelling(page: $page) {
      _id
      useditem {
        name
        tags
      }
      balance
      createdAt
      amount
    }
  }
`;
