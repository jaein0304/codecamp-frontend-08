import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  //   OnClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  OnClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}