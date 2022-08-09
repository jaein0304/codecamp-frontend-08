import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard, IQuery } from "../../src/commons/types/generated/types";

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
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  width: 25%;
`;

export default function MapFruitsPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
  console.log(data);
  // el 받기위한 ()
  const onClickBasket = (basket: IBoard) => () => {
    console.log(basket);

    // 1. 기존 장바구니 가져오기
    const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      JSON.parse(localStorage.getItem("baskets") || "[]"); // 있으면 가지고오고 없으면 빈배열

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      return;
    }

    // 3. 해당 장바구니에 담기
    const { __typename, ...newBasket } = basket; // __typename 빼고 rest라는 곳에 담기
    baskets.push(newBasket);

    /*     const baskets = [];
    baskets.push(basket); // 덮어쓰기, 기존에 있는 basket을 가지고 와야 함, 사용x */

    localStorage.setItem("baskets", JSON.stringify(baskets)); // 문자열밖에 안들어가니까 문자열로 바꿔줘야함
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </Row>
      ))}
    </>
  );
}
