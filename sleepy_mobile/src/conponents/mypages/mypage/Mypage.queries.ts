import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      userPoint {
        amount
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int) {
    fetchPointTransactions(page: $page) {
      _id
      status
      statusDetail
      balance
      createdAt
      amount
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($page: Int) {
    fetchPointTransactionsOfBuying(page: $page) {
      _id
      createdAt
      useditem {
        name
        price
      }
    }
  }
`;
