import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "62fd9f9803562900296b2ec3" }, // 게시글ID : router.query.boardId
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onCLickLike = () => {
    likeBoard({
      variables: { boardId: "62fd9f9803562900296b2ec3" },
      // refetchQueries: [{ query: FETCH_BOARD, variables: { boardId: "게시글ID" } },],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1, // 현재카운트 + 1 로 되었다고 사용자에게 요청
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "62fd9f9803562900296b2ec3" },
          data: {
            fetchBoard: {
              _id: "62fd9f9803562900296b2ec3",
              __typename: "board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>현재 카운트(좋아요) : {data?.fetchBoard.likeCount}</div>
      <button onClick={onCLickLike}>좋아요 올리기</button>
    </>
  );
}
