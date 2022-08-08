import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  width: 25%;
`;

export default function MapFruitsPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId // el._id가 안되므로 (_ref 밖에 없음), readField를 사용해 꺼내오기
              );
              return [...filteredPrev];
              // 1개를 지웠으니까 9개가 들어가야함
            },
          },
        });
      },
    });
  };
  const onClickCreate = () => {
    createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목",
          contents: "내용",
        },
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; // 기존에 있던 10개 앞에 1개가 붙어 fetchBoards에 총 11개가 붙음
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </Row>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
