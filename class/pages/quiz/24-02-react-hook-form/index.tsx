import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  // prettier-ignore
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onClickButton = (data) => {
    console.log(data);
  };
  return (
    // prettier-ignore
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자:
      <input type="text" {...register("errorWriter", { required: true })} />
      {errors.errorWriter && <div>작성자를 입력해주세요.</div>} <br />
      비밀번호:
      <input type="password"{...register("errorPassword", { required: true })}/>
      {errors.errorPassword && <div>비밀번호를 입력해주세요.</div>}<br />
      제목:
      <input type="text" {...register("errorTitle", { required: true })} />
      {errors.errorTitle && <div>제목을 입력해주세요.</div>}<br />
      내용:
      <input type="text" {...register("errorContents", { required: true })} />
      {errors.errorContents && <div>내용을 입력해주세요.</div>}<br />
      <button>게시물 등록하기</button>
    </form>
  );
}
