import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log(data);
  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };
  return (
    <>
      {/* <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>; */}
      <button onClick={onClickButton}>클릭하세요</button>
    </>
  );
}
