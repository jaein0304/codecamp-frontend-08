import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardNew: () => void;
  //   onClickMoveToBoardDetail: (MouseEventHandler) => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void;
}
