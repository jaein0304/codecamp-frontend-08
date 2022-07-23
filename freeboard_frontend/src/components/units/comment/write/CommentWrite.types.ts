import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  data: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
}

export interface IBoardCommentUIProps {
  // container의 setRating에 마우스를 가져다대면 어떤 선언을 해야하는지 알 수 있음
  // 0720
  setRating: Dispatch<SetStateAction<number>>;
  data?: Pick<IQuery, "fetchBoard">;
  writer: string;
  password: string;
  contents: string;
  rating: number;
  isActive: boolean;
  isEdit: boolean;
  writerError: string;
  passwordError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface ICommentSubmitButtonProps {
  submitButton: boolean;
  isActive: boolean;
}
