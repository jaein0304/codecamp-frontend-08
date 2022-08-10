export interface IProductWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;

  onClickButton: (data: any) => void;
  onChangeContents: (value: string) => void;
}
