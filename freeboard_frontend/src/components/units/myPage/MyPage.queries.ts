import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      userPoint {
        amount
      }
    }
  }
`;

// 전체내역
export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      useditem {
        _id
        name
        remarks
        price
      }
      user
      createdAt
      deletedAt
    }
  }
`;
// 날짜 / 내용 / 거래 및 충전 내역 / 잔액
// 충전내역
export const FETCH_POINT_CHARGE = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      impUid
      amount
      status
      statusDetail
    }
  }
`;

// 구매내역
// export const FETCH_BUY = gql`
// query fetchPointTransactionsOfBuying
// `;

// // 판매내역
// export const FETCH_SELL = gql`
// query fetchPointTransactionsOfSelling
// `;
