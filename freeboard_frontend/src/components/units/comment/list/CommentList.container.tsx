import { useQuery, useMutation } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.queries";
import BoardCommentListUI from "./CommentList.presenter";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();

  const [password, setPassword] = useState();
  const [boardCommentId, setBoardCommentId] = useState();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
    // refetchQueries: [
    //   {
    //     query: FETCH_BOARD_COMMENTS,
    //     variables: { boardId: router.query.boardId },
    //   },
    // ],
  });

  // 댓글 삭제 버튼 함수
  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    // const password = prompt("비밀번호 입력"); // 이거 모달창

    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: String(boardCommentId),
          // boardCommentId: (event.target as HTMLImageElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  // 댓글 삭제 알림 (modal)
  const onClickDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    setBoardCommentId(event.target.id);
    setIsOpenDeleteModal(true);
  };

  // 삭제 모달 안 패스워드 입력
  const onInputDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <BoardCommentListUI
      data={data}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickDelete={onClickDelete}
      onClickDeleteModal={onClickDeleteModal}
      onInputDeletePassword={onInputDeletePassword}
    />
  );
}
