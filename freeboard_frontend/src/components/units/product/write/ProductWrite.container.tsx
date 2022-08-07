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

const initialInputs = { name: "", remarks: "", contents: "", price: 0 };
export default function ProductWrite() {
  const router = useRouter();
  // const [isActive, setIsActive] = useState(false);
  const [inputs, setInputs] = useState(initialInputs);
  const [inputsError, setInputsError] = useState(initialInputs);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USE_ITEM);

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
    console.log("0000");
    if (event.target.value !== "") {
      setInputsError({
        ...inputsError,
        [event.target.id]: "",
      });
    }

    // if (Object.values(_inputs).every((el) => el)) {
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }
  };

  const onClickSubmit = async () => {
    console.log("1111");
    // const errors = {
    //   name: "이름을 입력해주세요.",
    //   remarks: "상품설명을 입력해주세요.",
    //   contents: "내용을 입력해주세요.",
    //   price: "가격을 입력해주세요.",
    // };
    // (Object.keys(inputs) as Array<keyof typeof inputs>).forEach((el) => {
    //   if (!inputs[el]) {
    //     setInputsError({
    //       ...inputsError,
    //       [el]: errors[el],
    //     });
    //   }
    // });
    // if (Object.values(inputs).every((el) => el)) {
    try {
      Object.values(inputs).every((el) => el);
      console.log("2222");
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...inputs,
          },
        },
      });
      console.log(result.data?.createUseditem._id);
      console.log(result);
      console.log("3333");
      // router.push(`/product/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    // }
  };

  return (
    <ProductWriteUI
      inputsError={inputsError}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
    />
  );
}
