import { MutableRefObject } from "react";

export interface IUploads02Props {
  onChangeFiles(file: any, index: number);
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  // onChangeFiles: (fileUrl: string, index: number) => void;
  onChangeImage: (event: any) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploads02UIProps {
  fileRef: MutableRefObject<null>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUploadImage: () => void;
  onChangeImage: (event: any) => void;
}
