import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentWriteProps {
    isEdit: boolean;
}

export interface IBoardCommentUIProps {
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
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ICommentSubmitButtonProps {
    submitButton: boolean;
}