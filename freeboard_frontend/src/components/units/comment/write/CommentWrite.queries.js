import { gql } from '@apollo/client'


export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment($updateBoardCommentInput: UpdateBoardInput!, $password: String, $boardCommentId: ID!) {
    updateBoardComment(updateBoardCommentInput:$updateBoardInput, password: $password, boardCommentId: $boardCommentId)
      _id
      writer
      contents
      rating
      updatedAt
  }    
`;