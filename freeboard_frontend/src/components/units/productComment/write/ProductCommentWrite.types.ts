import { Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface IProductCommentWriteUIProps {
  contents: string;
  onChangeContents: (event: any) => void;
  onClickRegisterComment: () => Promise<void>;
  onClickUpdateComment: () => Promise<void>;
  el?: IUseditemQuestion;
  isEdit?: boolean;
}

export interface IProductCommentWriteProps {
  el?: IUseditemQuestion;
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>; // toast ui dispatch는 뭐지(0815)
}
