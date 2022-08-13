import { useRouter } from "next/router";
import ProductWriteUI from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USE_ITEM, UPDATE_USE_ITEM } from "./ProductWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import { useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { IProductWriteProps } from "./ProductWrite.types";
import { FETCH_USED_ITEM } from "../detail/ProductDetail.queries";

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

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();

  // 토스트
  const editorRef = useRef<Editor>();

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USE_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USE_ITEM);
  /* 
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.productId,
    },
  }); */
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 내용 별도
  const onChangeContents = (value: string) => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("contents", inputs);
    trigger("contents");
  };

  // 상품 등록
  const onClickButton = async (data) => {
    // console.log("check");
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
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
  // 상품 수정
  const onClickUpdate = async (data) => {
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
          },
          useditemId: String(router.query.productId),
        },
      });
      alert("상품수정이 완료되었습니다.");
      router.push(`./product/detail/${result.data?.updateUseditem._id}`);
    } catch (error) {
      alert("상품수정이 완료되지 않았습니다.");
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
      onClickUpdate={onClickUpdate}
      editorRef={editorRef}
      isEdit={props.isEdit}
      // data={props.data}
    />
  );
}
