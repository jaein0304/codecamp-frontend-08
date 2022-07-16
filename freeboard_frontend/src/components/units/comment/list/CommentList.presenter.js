import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper>
          <S.IdWrapper key={el._id}>
            <S.CommentWrapper>
              <S.ProfileWrapper>
                <S.Profile src="/img-board-detail/ic_profile-56px.png" />
                <S.RightWrapper>
                  <S.Writer>{el.writer}</S.Writer>
                  <S.Contents>{el.contents} </S.Contents>
                  <S.CreatedAt>{getDate(el.CreatedAt)}</S.CreatedAt>
                </S.RightWrapper>
              </S.ProfileWrapper>
            </S.CommentWrapper>
          </S.IdWrapper>
        </S.Wrapper>
      ))}
    </>
  );
}