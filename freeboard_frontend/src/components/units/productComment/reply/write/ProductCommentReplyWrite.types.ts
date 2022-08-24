import { Dispatch, SetStateAction } from "react";

export interface IProductCommentReplyUIProps {
  onChangeReply: (e: any) => void;
  onClickRegisterReply: () => Promise<void>;
}

export interface IProductCommentReplyWriteProps {
  // el?: IUseditemQuestion;
  setIsReply: Dispatch<SetStateAction<boolean>>;
  setIsAnswerEdit: (value: SetStateAction<boolean>) => void;
  isAnswerEdit: any;
  replyEl: any;
}
