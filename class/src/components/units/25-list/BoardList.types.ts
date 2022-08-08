import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  count?: number;
  keyword: string;

  onClickMoveToBoardNew: () => void;
  onChangeKeyword: (value: string) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void;

  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}
