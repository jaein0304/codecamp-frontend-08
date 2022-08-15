import { IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface IProductCommentListUIProps {
  data: any;
  onLoadMore: () => void;
  // onClickDelete: (event: any) => Promise<void>;
}

export interface IBoardCommentListUIItemProps {
  el: IUseditemQuestion;
}
