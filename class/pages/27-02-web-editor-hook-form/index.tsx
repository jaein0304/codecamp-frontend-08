// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    // onChange일 때 뭘해줘
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 강제로 날려주는 기능 (다른 친구들은 자동 적용됨)
    trigger("contents");
  };
  return (
    // prettier-ignore
    <div>
      작성자 : <input type="text" {...register("writer")} /> <br />
      비밀번호 : <input type="password" {...register("password")}  /><br />
      제목 : <input type="text"  {...register("title")} /><br />
      내용 : <ReactQuill onChange={onChangeContents}/><br />
      <button>등록하기</button>
    </div>
  );
}
