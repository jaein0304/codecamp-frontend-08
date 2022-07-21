import { IQuery } from "../../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

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

export interface ISlideButtonProps {
  isActive: boolean;
}

// types
