// import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
// import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

/* const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`; */
function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <div>{userInfo.name}님 환영합니다</div>;
}

export default withAuth(LoginSuccessPage);

// application에서 access-token 삭제 후 새로고침 시
// alert ("로그인 후 이용가능합니다")
