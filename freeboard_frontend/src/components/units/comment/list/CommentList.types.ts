import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  onClickUpdate: (event: MouseEvent<HTMLImageElement>) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
  isOpenDeleteModal: boolean;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onInputDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  // onClickMoveToBoardCommentUpdate: () => void;
}

export interface IBoardCommentListItemProps {
  data?: Pick<IQuery, "fetchBoardComments">;
}
