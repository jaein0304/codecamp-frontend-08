import { ChangeEvent } from "react";

export interface IProductWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickButton: (data: any) => void;
}
