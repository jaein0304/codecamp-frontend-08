import { ChangeEvent, MouseEvent } from "react";
import _ from "lodash";
import { ApolloQueryResult, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

// 검색에 props
export interface ISearchBarProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}

export default function SearchBar(props: ISearchBarProps) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
  //   if (!(event.target instanceof HTMLSpanElement)) return;
  //   refetch({ page: Number(event.target.id) });
  // };

  return (
    <>
      검색어입력
      <input type="text" onChange={onChangeSearch} />
      {/* {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}
    </>
  );
}
