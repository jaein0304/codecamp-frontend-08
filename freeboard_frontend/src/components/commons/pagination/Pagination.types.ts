import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../src/commons/types/generated/types";
import { MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";

export interface IPaginationProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  currentPage: number;
  isActive: boolean;
}

export interface IPaginationToContainerProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

export interface ISlideButtonProps {
  isActive: boolean;
}
