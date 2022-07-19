import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "정재인", title: "1번", contents: "하드코딩") {
      _id
      number
      message
    }
  }
`;

export default function GrapghqlPage() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    const result = await createBoard();
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  return (
    <>
      <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
    </>
  );
}
