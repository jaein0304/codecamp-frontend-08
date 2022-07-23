import * as S from "./CommentWrite.styles";
import { IBoardCommentUIProps } from "./CommentWrite.types";

export default function BoardCommentUI(props: IBoardCommentUIProps) {
  return (
    <S.Wrapper>
      {/* <S.Title>{props.isEdit ? "댓글수정" : "댓글등록"}</S.Title> */}
      {props.isEdit && (
        <>
          <S.EditIcon src="/images/board/list/write.png" />
          <span>댓글</span>
        </>
      )}
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Writer
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer || ""}
            value={props.writer}
          />
          <S.Error>{props.writerError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          />
          <S.Error>{props.passwordError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Rating onChange={props.setRating} value={props.rating} />
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
          value={props.contents}
        />
        <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
        <S.Error>{props.contentsError}</S.Error>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          submitButton={props.isActive}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "댓글수정" : "댓글등록"}
        </S.SubmitButton>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
