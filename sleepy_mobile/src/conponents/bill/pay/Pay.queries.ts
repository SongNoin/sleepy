import { gql } from "@apollo/client";


export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId:ID!) {
        fetchUseditem(useditemId:$useditemId) {
            _id
            price
        }
    }
`;

export const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            _id
            email
            name
        }
    }
`;


export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
    mutation createPointTransactionOfBuyingAndSelling($useritemId:ID!) {
        createPointTransactionOfBuyingAndSelling(useritemId:$useritemId) {
            _id
        }
    }
`;