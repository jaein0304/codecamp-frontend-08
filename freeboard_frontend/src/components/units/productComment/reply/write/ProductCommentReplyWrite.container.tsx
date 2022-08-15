import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import ProductCommentReplyUI from "./ProductCommentReplyWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "./ProductCommentReplyWrite.queries";

export default function ProductCommentReply(props) {
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);

  const onChangeReply = (e) => {
    setContents(e.target.value);
  };

  const onClickRegisterReply = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.el?._id,
          createUseditemQuestionAnswerInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId: props.el?._id },
          },
        ],
      });
      alert("답글 등록이 완료되었습니다.");
      props.serIsOpenAnswer(false);
    } catch (error) {
      alert("답글 등록이 완료되지 않았습니다.");
    }
  };

  return (
    <ProductCommentReplyUI
      onChangeReply={onChangeReply}
      onClickRegisterReply={onClickRegisterReply}
    />
  );
}
