import * as S from "./ProductCommentReplyWrite.styles";

export default function ProductCommentReplyWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Arrow src="/images/reply_arrow.png" />
      <S.InputCommentBox>
        <S.CommentInput type="text" onChange={props.onChangeMyAnswer} />
        <S.CommentInfo>
          <S.CommentCountInput></S.CommentCountInput>
          <S.MyButton
            // name={props.isAnswerEdit ? "수정하기" : "답변하기"}
            onClick={props.isAnswerEdit ? props.onClickUpdateAnswer : props.onClickRegisterAnswer}
            id={props.replyEl?._id}
          >
            {props.isAnswerEdit ? "수정하기" : "등록하기"}
          </S.MyButton>
        </S.CommentInfo>
      </S.InputCommentBox>
    </S.Wrapper>
  );
}
