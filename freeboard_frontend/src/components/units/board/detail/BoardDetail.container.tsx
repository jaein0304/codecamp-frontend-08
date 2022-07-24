import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(DISLIKE_BOARD);

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickUpToLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };

  const onClickUpToDisLike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  // 게시물 삭제 버튼
  const onClickBoardDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          {
            query: DELETE_BOARD,
            variables: { boardId: router.push("/boards/") },
          },
        ],
      });
    } catch (error) {
      alert("삭제되었습니다.");
    }
  };
  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickUpToLike={onClickUpToLike}
      onClickUpToDisLike={onClickUpToDisLike}
      onClickBoardDelete={onClickBoardDelete}
    />
  );
}
