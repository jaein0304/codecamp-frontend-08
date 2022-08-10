import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { getDate } from "../../../src/commons/libraries/units";
import BasketPage from "../../quiz/26-01-basket";
// import BasketPage from "./index";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubWrapper = styled.div`
  width: 20%;
`;

export default function BoardWriteUI(props) {
  return (
    <>
      {props.data?.fetchBoards.map((el) => (
        <Wrapper key={el._id}>
          <SubWrapper>{el._id}</SubWrapper>
          <SubWrapper>{el.writer}</SubWrapper>
          <SubWrapper>{el.title}</SubWrapper>
          <SubWrapper>{el.contents}</SubWrapper>
          <SubWrapper>{getDate(el.createdAt)}</SubWrapper>
          <BasketPage el={el} />
        </Wrapper>
      ))}
    </>
  );
}
