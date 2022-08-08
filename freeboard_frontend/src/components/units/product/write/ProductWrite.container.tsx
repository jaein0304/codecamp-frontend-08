import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USE_ITEM } from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
// const initialInputs = { name: "", remarks: "", contents: "", price: 0 };
export default function ProductWrite() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickButton = (data) => {
    console.log(data);
  };

  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickButton={onClickButton}
    />
  );
}
