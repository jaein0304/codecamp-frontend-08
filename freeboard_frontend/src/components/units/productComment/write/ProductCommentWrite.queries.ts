import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestion: $createUseditemQuestion
      useditemId: $useditemId
    ) {
      _id
      contents
      user
    }
  }
`;
