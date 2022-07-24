import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickUpToLike: () => void;
  onClickUpToDisLike: () => void;
  onClickBoardDelete: (event: MouseEvent<HTMLElement>) => void;
}
