export interface IProductWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  editorRef: RefObject<Editor>;
  onClickButton: (data: any) => void;
  onChangeContents: (value: string) => void;
}
