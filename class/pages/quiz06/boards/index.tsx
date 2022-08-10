import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IBoard,
  IMutationCreateBoardArgs,
  IQuery,
} from "../../../src/commons/types/generated/types";
import BoardWriteUI, { FETCH_BOARDS } from "./presenter";

export default function BasketPage(props) {
  const [isActive, setIsActive] = useState(false);
  const [isBasket, setIsBasket] = useState(false);
  const { data } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IMutationCreateBoardArgs
  >(FETCH_BOARDS);

  const onClickBasket = (basket: IBoard) => () => {
    console.log(basket);
    const baskets: Pick<
      IBoard,
      "contents" | "title" | "_id" | "writer" | "createdAt"
    >[] = JSON.parse(localStorage.getItem("baskets") || "[]");

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
  };

  const onClickCancelBasket = (basket: IBoard) => () => {
    // const removed = localStorage.removeItem("basket");
    // const removed = localStorage.setItem("baskets", JSON.stringify(basket));
    // console.log(removed);
    // const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
    //   JSON.parse(localStorage.getItem("baskets") || "[]");
    // const temp = baskets.filter((el) => el._id === basket._id);
    // if (temp.length === 1) {
    //   const deletedBasket = baskets.filter((el) => el._id !== basket._id);
    //   localStorage.setItem("baskets", JSON.stringify(deletedBasket));
    //   setIsActive(false);
    //   setIsBasket(false);
    //   return;
    // }
    console.log("지워짐");
  };

  return (
    <>
      <BoardWriteUI
        data={data}
        isActive={isActive}
        isBasket={isBasket}
        onClickCancelBasket={onClickCancelBasket}
        onClickBasket={onClickBasket}
      />
    </>
  );
}
