import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "5자 이내로 입력해주세요.")
    .required("작성자를 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{0,8}$/,
      "영문, 숫자, 특수문자를 포함한 8자리 이하의 비밀번호여야 합니다."
    ),

  title: yup
    .string()
    .max(100, "100자 이내로 입력해주세요.")
    .required("제목을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "1000자 이내로 입력해주세요.")
    .required("내용을 입력해주세요."),
});

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickButton = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      비밀번호: <input type="text" {...register("password")} />
      <div>{formState.errors.password?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      <button>등록하기</button>
    </form>
  );
}
