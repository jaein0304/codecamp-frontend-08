import { gql } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      # impUid
      # amount
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      userPoint {
        _id
        amount
        user {
          _id
          email
          name
        }
      }
    }
  }
`;
