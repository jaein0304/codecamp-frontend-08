import { Pagination } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import PaginationContainer from "../../../commons/pagination/Pagination.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import SearchBar from "../../../commons/searchbar";
export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <SearchBar
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: props.keyword === el ? "red" : "black" }}
                >
                  {el}
                </span>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <PaginationContainer refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
