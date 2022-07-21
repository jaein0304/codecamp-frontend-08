import { IPaginationProps } from "./Pagination.types";
import * as S from "./Pagination.styles";

export default function PaginationUI(props: IPaginationProps) {
  return (
    <>
      <S.ContentWrapper>
        {props.data?.fetchBoards?.map((el) => (
          <S.Row key={el._id}>
            <S.Column>{el.writer}</S.Column>
            <S.Column>{el.title}</S.Column>
          </S.Row>
        ))}
      </S.ContentWrapper>
      <S.PageWrapper>
        <S.SlideButton
          isActive={props.isActive ? true : props.isActive}
          onClick={props.onClickPrevPage}
        >{`<`}</S.SlideButton>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.PageButton
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
                currentPage={
                  props.startPage + Number(index) === props.currentPage
                }
              >
                {index + props.startPage}
              </S.PageButton>
            )
        )}
        <S.SlideButton
          isActive={props.isActive ? true : props.isActive}
          onClick={props.onClickNextPage}
        >{`>`}</S.SlideButton>
      </S.PageWrapper>
    </>
  );
}
