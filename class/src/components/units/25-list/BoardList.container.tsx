import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";

import { MouseEvent, useState } from "react";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import useSearch from "../../commons/hooks/useSearch";

export default function BoardList() {
  /* const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLButtonElement>) => {
    router.push(`/boards/${(event.target as HTMLButtonElement).id}`);
  }; */

  /*   const onChangeKeyword = (value: string) => {
    setKeyword(value);
  }; */

  const { onClickMoveToPage } = useMoveToPage();
  const { keyword, onChangeKeyword } = useSearch();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  return (
    <BoardListUI
      data={data}
      keyword={keyword}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      // onClickMoveToBoardNew={onClickMoveToBoardNew}
      // onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      // onChangeKeyword={onChangeKeyword}
      onClickMoveToPage={onClickMoveToPage}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
