import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";

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
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const FullWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5%;
  box-shadow: 0px 0px 10px 5px violet;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3%;
  width: 200px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 300px;
  margin: 1%;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 100px;
  border-radius: 20px;
  font-weight: 700;
  background-color: pink;
`;
const XButton = styled.button`
  width: 50px;
  height: 40px;
  background-color: lightblue;
  border-radius: 20px;
  font-weight: 700;
  margin: 2%;
`;

const initialInputs = { writer: "", password: "", title: "", contents: "" };
export default function ApolloCacheState() {
  const { data } = useQuery(FETCH_BOARDS);
  const [inputs, setInputs] = useState(initialInputs);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
  };

  const onCLickSubmit = async () => {
    console.log("asd");
    console.log({ ...inputs });
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                return [data.createBoard, ...prev];
              },
            },
          });
        },
      });
      console.log(result.data?.createBoard._id);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      <FullWrapper>
        <Wrapper>
          {data?.fetchBoards.map((el) => (
            <List key={el._id}>
              <ListWrapper>{el._id}</ListWrapper>
              <ListWrapper>{el.writer}</ListWrapper>
              <ListWrapper>{el.contents}</ListWrapper>
              <XButton onClick={onClickDelete(el._id)}>[x]</XButton>
            </List>
          ))}
        </Wrapper>
        <Wrapper>
          <InputWrapper>
            작성자 <Input type="text" onChange={onChangeInputs} id="writer" />
            비밀번호
            <Input type="text" onChange={onChangeInputs} id="password" />
            제목 <Input type="text" onChange={onChangeInputs} id="title" />
            내용 <Input type="text" onChange={onChangeInputs} id="contents" />
          </InputWrapper>
          <Button onClick={onCLickSubmit}>등록하기</Button>
        </Wrapper>
      </FullWrapper>
    </>
  );
}
