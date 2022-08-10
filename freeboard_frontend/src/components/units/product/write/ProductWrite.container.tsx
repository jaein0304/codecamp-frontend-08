import { useRouter } from "next/router";
import ProductWriteUI from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { CREATE_USE_ITEM } from "./ProductWrite.queries";
import { useAuth } from "../../../commons/hooks/useAuth";
/* import { useRef } from "react";
import dynamic from "next/dynamic"; */

/* const ToastEditor = dynamic(
  () => import("../../../../..//src/commons/libraries/toast"),
  { ssr: false }
); */
const schema = yup.object({
  name: yup
    .string()
    .max(30, "30자 이내로 입력해주세요.")
    .required("상품이름을 입력해주세요"),
  remarks: yup
    .string()
    .max(100, "100자 이내로 입력해주세요.")
    .required("상품 목록을 입력해주세요"),
  price: yup.number().required("가격을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "1000자 이내로 입력해주세요.")
    .required("내용을 입력해주세요."),
});

export default function ProductWrite() {
  // useAuth();
  const router = useRouter();
  // const editorRef = useRef();
  const [createUseditem] = useMutation(CREATE_USE_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    /*   ToastEditor.prototype.getInstance().getHTML();
    ToastEditor.prototype.getInstance().getMarkdown();
    console.log(editorRef.current?.getInstance().getHTML());
    console.log(editorRef.current?.getInstance().getMarkdown());
    setHtml("<h1>HELLO WORLD</h1>");
    console.log(editor.getHTML()); */
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickButton = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: data.price,
            contents: data.contents,
            // {...data} 로 바꾸기
          },
        },
      });
      console.log(result);
      console.log(result.data?.createUseditemInput._id);
      // router.push(`./detail/${result.data.createUseditemInput._id}`);
    } catch (error) {
      alert("상품이 등록되지 않았습니다.");
    }
  };
  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickButton={onClickButton}
      onChangeContents={onChangeContents}
    />
  );
}
