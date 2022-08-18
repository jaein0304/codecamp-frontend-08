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
    variables: { boardId: "62fd9f9803562900296b2ec3" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onCLickLike = () => {
    likeBoard({
      variables: { boardId: "62fd9f9803562900296b2ec3" },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
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
      <h1>{data?.fetchBoard.likeCount}</h1>
      <button onClick={onCLickLike}>👍</button>
    </>
  );
}
