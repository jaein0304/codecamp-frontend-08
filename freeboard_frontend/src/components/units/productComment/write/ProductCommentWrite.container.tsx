import { useMutation } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./ProductCommentWrite.queries";

export default function ProductCommentWrite() {
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onClickRegisterComment = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.productId),
          createUseditemQuestionInput: {
            contents,
          },
        },
      });
      alert("댓글이 등록되었습니다.");
    } catch (error) {
      alert("댓글이 등록되지 않았습니다.");
    }
  };
  return (
    <ProductCommentWriteUI
      onChangeContents={onChangeContents}
      onClickRegisterComment={onClickRegisterComment}
    />
  );
}
