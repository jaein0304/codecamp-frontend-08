import { useMutation } from "@apollo/client";
import router from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/ProductCommentList.queries";
import ProductCommentWriteUI from "./ProductCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./ProductCommentWrite.queries";
import { IProductCommentWriteProps } from "./ProductCommentWrite.types";

export default function ProductCommentWrite(props: IProductCommentWriteProps) {
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const [contents, setContents] = useState("");

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
      alert("댓글이 등록되었습니다.");
      setContents(""); // 등록된다면 빈 값으로 바꾸기
    } catch (error) {
      alert("댓글이 등록되지 않았습니다.");
    }
  };

  const onClickUpdateComment = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          // useditemQuestionId: String(router.query.productId),
          useditemQuestionId: String(props.el?._id),
          updateUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.productId) },
          },
        ],
      });
      props.setIsEdit?.(false);
      alert("댓글이 수정되었습니다.");
    } catch (error) {
      alert("댓글이 수정되지 않았습니다.");
    }
  };
  return (
    <ProductCommentWriteUI
      onChangeContents={onChangeContents}
      onClickRegisterComment={onClickRegisterComment}
      onClickUpdateComment={onClickUpdateComment}
      contents={contents}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}
