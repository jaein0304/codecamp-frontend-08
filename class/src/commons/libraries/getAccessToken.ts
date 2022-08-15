import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend08.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN); // await 대신에 .then() 가능
    const newAccessToken = result.restoreAccessToken.accessToken; // 새 토큰
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
