import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    const result = await createBoard({
      variables: { ...inputs }, // 리팩토링
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  /*   ...inputs
    => writer: inputs.writer,
      title: inputs.title,
      contents: inputs.contents, */

  // 리팩토링
  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
    </>
  );
}
