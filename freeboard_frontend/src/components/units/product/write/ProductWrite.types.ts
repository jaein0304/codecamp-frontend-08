import { ChangeEvent } from "react";

export interface IProductWriteUIProps {
  inputsError: {
    name: string;
    remarks: string;
    contents: string;
    price: number;
  };
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickSubmit: () => Promise<void>;
}
