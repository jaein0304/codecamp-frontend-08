import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchBoard($useditemId: ID!) {
    fetchBoard(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
    }
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
