import { useRouter } from "next/router";
import ProductWriteUI from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { CREATE_USE_ITEM } from "./ProductWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";

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
  const router = useRouter();
  // 토스트
  const editorRef = useRef<Editor>(null);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USE_ITEM);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 내용 별도로
  const onChangeContents = (value: string) => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("contents", inputs);
    trigger("contents");

    // setValue("contents", value === "<p><br></p>" ? "" : value);
    // trigger("contents");
  };

  const onClickButton = async (data) => {
    // console.log("check");
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
      console.log("asd");
      console.log(result);
      console.log(result.data?.createUseditem._id);
      router.push(`./${result.data?.createUseditem._id}`);
    } catch (error) {
      alert("상품이 등록되지 않았습니다.");
      console.log(error);
    }
  };
  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickButton={onClickButton}
      onChangeContents={onChangeContents}
      editorRef={editorRef}
    />
  );
}
