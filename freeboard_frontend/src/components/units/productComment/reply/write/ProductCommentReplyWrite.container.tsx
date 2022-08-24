import { useMutation } from "@apollo/client";
import { useState } from "react";
import ProductCommentReplyWriteUI from "./ProductCommentReplyWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./ProductCommentReplyWrite.queries";
import { IProductCommentReplyWriteProps } from "./ProductCommentReplyWrite.types";

export default function ProductCommentReplyWrite(props) {
  const [myAnswer, setMyAnswer] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(CREATE_USEDITEM_QUESTION_ANSWER);
  const [updateUseditemQuestionAnswer] = useMutation(UPDATE_USEDITEM_QUESTION_ANSWER);

  const onChangeMyAnswer = (event) => {
    setMyAnswer(event.target.value);
  };
  const onClickRegisterAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.el?._id,
          createUseditemQuestionAnswerInput: {
            contents: myAnswer,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId: props.el?._id },
          },
        ],
      });
      alert("대댓글 등록");
      props.setIsReply?.(false);
      // props.ReplyEl?.setIsReply(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdateAnswer = async (event) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: myAnswer },
          useditemQuestionAnswerId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: {
              useditemQuestionId: props.replyEl?.useditemQuestion._id,
            },
          },
        ],
      });
      props.setIsAnswerEdit?.(false);
      alert("대댓글 수정");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ProductCommentReplyWriteUI
      onChangeMyAnswer={onChangeMyAnswer}
      onClickRegisterAnswer={onClickRegisterAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
      isAnswerEdit={props.isAnswerEdit}
      replyEl={props.replyEl}
    />
  );
}
