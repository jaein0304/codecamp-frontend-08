import { useQuery } from "@apollo/client";

import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../src/commons/types/generated/types";
import PaginationUI from "./Pagination.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Pagination.queries";

export default function PaginationContainer() {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 1;

  // function
  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;
    refetch({ page: Number(event.target.id) });
    setCurrentPage(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsActive(true);
      //   console.log(isActive);
      return;
    }
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
    setCurrentPage(currentPage + 10);
    setIsActive(false);
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      refetch({ page: startPage + 10 });
      setCurrentPage(currentPage - 10);
      setIsActive(false);
    } else {
      setIsActive(true);
      //   console.log(isActive);
    }
  };

  // jsx
  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      data={data}
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
      isActive={isActive}
    />
  );
}
