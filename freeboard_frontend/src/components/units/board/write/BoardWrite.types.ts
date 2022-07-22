import { MouseEvent, ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// container
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

// presenter
export interface IBoardWriteUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
  buttonColor: boolean;
  isOpen: boolean;
  passwordError: string;
  writerError: string;
  titleError: string;
  contentsError: string;
  zipcode: string;
  address: string;
  addressDetail: string;

  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
}

// styles
export interface ISubmitButtonProps {
  submitButton: boolean;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}
