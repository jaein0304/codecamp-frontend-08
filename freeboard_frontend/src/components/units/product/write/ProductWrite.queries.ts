import { gql } from "@apollo/client";

export const CREATE_USE_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
    }
  }
`;
