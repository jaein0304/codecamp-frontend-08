import { StoreWriter } from "@apollo/client/cache/inmemory/writeToStore";
import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  const onClickButton = (data) => {
    console.log(data);
  };

  console.log("리렌더링 되나영");
  //   const onChangeWriter = (event) => {
  //     setWriter(event.target.value);
  //   };
  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자 : <input type="text" {...register("writer")} />
      제목 : <input type="text" {...register("title")} />
      내용 : <input type="text" {...register("contents")} />
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button>등록하기</button>
    </form>
  );
}

/* 
form 태그 내에서의 버튼 타입들
    <button type="submit">등록하기</button>
    <button type="button" onClick={onClickMove}>페이지 이동하기</button>
    <button type="reset">등록하기</button>       
 */
