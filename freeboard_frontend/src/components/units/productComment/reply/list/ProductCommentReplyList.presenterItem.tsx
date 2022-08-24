import { useState } from "react";
import ProductCommentReplyWrite from "../write/ProductCommentReplyWrite.container";
import * as S from "./ProductCommentReplyList.styles";

export default function ProductCommentReplyItemUI(props) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);

  const onClickOpenEditAnswer = () => {
    setIsAnswerEdit(true);
  };
  return (
    <>
      {!isAnswerEdit && (
        <S.Wrapper>
          <S.Arrow src="/images/reply_arrow.png" />
          <S.WrapperFooter>
            <S.AnswerWrapper>
              <S.AnswerInfo>
                <S.UserName>{props.replyEl?.user?.name}</S.UserName>
                <S.Comment>{props.replyEl?.contents}</S.Comment>
              </S.AnswerInfo>
            </S.AnswerWrapper>
            <S.ButtonWrapper>
              <S.Button
                onClick={onClickOpenEditAnswer}
                src="/images/boardComment/list/option_update_icon.png"
              />
              <S.Button
                onClick={props.onClickDeleteAnswer(props.replyEl?._id)}
                src="/images/boardComment/list/option_delete_icon.png"
              />
            </S.ButtonWrapper>
          </S.WrapperFooter>
        </S.Wrapper>
      )}
      {isAnswerEdit && (
        <ProductCommentReplyWrite
          isAnswerEdit={isAnswerEdit}
          setIsAnswerEdit={setIsAnswerEdit}
          replyEl={props.replyEl}
        />
      )}
    </>
  );
}
