import { gql, useQuery } from "@apollo/client";
// import moment from "moment";
import moment from "moment-timezone";
import * as S from "./PointList.commonStyles";

// 포인트 왔다갔다한 내용
const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;
export default function PointListPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1 },
  });
  return (
    <>
      <S.Wrapper>
        <S.TitleLine></S.TitleLine>
        <S.Row>
          <S.Title>날짜</S.Title>
          <S.Title>내용</S.Title>
          <S.Title>거래 및 충전내역</S.Title>
          <S.Title>잔액</S.Title>
        </S.Row>
        <S.TitleLine></S.TitleLine>
        {data?.fetchPointTransactions.map((el) => (
          <S.Row key={el._id}>
            <S.Date>{moment(el.createdAt).tz("Asia/Seoul").format("LLL")}</S.Date>
            <S.ContentsUp></S.ContentsUp>
          </S.Row>
        ))}
      </S.Wrapper>
    </>
  );
}
