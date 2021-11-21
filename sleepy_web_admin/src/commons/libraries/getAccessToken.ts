import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken(setAccessToken) {
  try {
    const graphQLCLient = new GraphQLClient(
      "https://backend03-team.codebootcamp.co.kr/team05",
      {
        credentials: "include",
      }
    );
    const result = await graphQLCLient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
