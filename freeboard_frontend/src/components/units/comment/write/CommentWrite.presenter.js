import * as S from "./CommentWrite.styles";

export default function BoardCommentUI(props){
    return (
      <S.Wrapper>
        {/* <S.Title>{props.isEdit ? "댓글수정" : "댓글등록"}</S.Title> */}
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Writer type="text" placeholder="작성자" onChange={props.onChangeWriter} />
            <S.Error>{props.writerError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Password type="password" placeholder="비밀번호" onChange={props.onChangePassword} />
            <S.Error>{props.passwordError}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Password type="text" placeholder="점수" onChange={props.onChangeRating} />
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Contents
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
          />
          <S.Error>{props.contentsError}</S.Error>
          <S.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit} isActive={props.isEdit ? true : props.isActive}>
            {props.isEdit ? "댓글수정" : "댓글등록"}
          </S.SubmitButton>
        </S.InputWrapper>
      </S.Wrapper>
    );
}