import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

import { useState } from "react";
import {
  IBoard,
  IMutationCreateBoardArgs,
  IQuery,
} from "../../../src/commons/types/generated/types";

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

const Button = styled.button`
  margin: 1%;
  display: flex;
  flex-direction: column;
`;

export default function BasketPage(props) {
  const [isActive, setIsActive] = useState(false);
  const [isBasket, setIsBasket] = useState(false);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IMutationCreateBoardArgs
  >(FETCH_BOARDS);

  const onClickBasket = (basket: IBoard) => () => {
    console.log(basket);

    const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      setIsActive(true);
      setIsBasket(true);
      console.log("111");
      return;
    }

    const { __typename, ...newBasket } = basket;
    baskets.push(newBasket);

    localStorage.setItem("baskets", JSON.stringify(baskets));

    const a = localStorage.key(Number(basket._id));
    console.log(a);
  };

  const onClickCancelBasket = (basket: IBoard) => () => {
    const removed = localStorage.removeItem("basket");

    // const removed = localStorage.setItem("baskets", JSON.stringify(basket));

    console.log(removed);
    console.log("지워짐");
  };
  return (
    <>
      {/* prettier-ignore */}
      <Button
        onClick={isActive ? onClickCancelBasket(props.el) : onClickBasket(props.el)}
        style={{ backgroundColor: isActive ? "" : "pink" }}>
        {isBasket ? "담기취소" : "게시물담기"}
      </Button>
    </>
  );
}
