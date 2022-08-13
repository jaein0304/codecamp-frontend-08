import Editor from "@toast-ui/editor";
import { MutableRefObject } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  // editorRef: RefObject<Editor>;
  editorRef: MutableRefObject<Editor | undefined>;
  onClickButton: (data: any) => void;
  onClickUpdate: (data: any) => Promise<void>;
  onChangeContents: (value: string) => void;
  isEdit: boolean;
  isActive: boolean;
}

export interface IProductWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface IProductUpdateInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
}

// 다 입력하면 버튼 색 바꾸기, 아직 안함(08/13)
export interface ISubmitButtonProps {
  iseActive: boolean;
}
