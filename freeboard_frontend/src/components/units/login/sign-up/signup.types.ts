export interface ISignUpUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  // onRegister: () => void;
  onClickButton: (data: any) => void;
}
