import SignUpPageUI from "./signup.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .matches(/^\w+@\w+\.\w+$/, "이메일 형식에 알맞지 않습니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{0,8}$/,
      "영문, 숫자, 특수문자를 포함한 8자리 이하의 비밀번호여야 합니다."
    ),
  // password_confirm: yup.string().required("비밀번호가 서로 다릅니다."),
  name: yup.string().required("이름을 입력해주세요."),
  phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않습니다."),
});

export default function SignUpPage() {
  // const onRegister = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // };

  const onClickButton = (data) => {
    console.log(data);
  };

  return (
    <SignUpPageUI
      // onRegister={onRegister}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickButton={onClickButton}
    />
  );
}
