import { MouseEvent } from "react";
import { ChangeEvent, MouseEventHandler } from "react";


//container
export interface IBoardWriteProps {
  isEdit: boolean;
}

//presenter
export interface IBoardWriteUIProps {
  isEdit: boolean;
  buttonColor: boolean;
  passwordError: string;
  writerError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
}


//styles
export interface ISubmitButtonProps {
  submitButton: boolean;
}
