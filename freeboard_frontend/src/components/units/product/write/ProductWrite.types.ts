import Editor from "@toast-ui/editor";
import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from "react";
import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWriteUIProps {
  myLat: any;
  isEdit: boolean;
  isActive: boolean;
  data: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  // editorRef: RefObject<Editor>;
  editorRef: MutableRefObject<Editor | undefined>;
  onClickButton: (data: any) => void;
  onClickUpdate: (data: any) => Promise<void>;
  onChangeContents: (value: string) => void;
  onChangeFile: (index: number) => (event: ChangeEvent<HTMLInputElement>) => void;

  imageUrls: string[];
  onClickAddressSearch: () => void;
  onClickCompleteAddressSearch: (data: any) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
  setGPS: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;

  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
}

export interface IProductWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

// export interface IProductUpdateInput {
//   name?: string;
//   remarks?: string;
//   contents?: string;
//   price?: number;
// }
