import { gql } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { GraphQLClient } from "graphql-request";
import { Dispatch, SetStateAction } from "react";

const RESTORE_ACCRESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken(
  setAccessToken: Dispatch<SetStateAction<string>>
) {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend03-team.codebootcamp.co.kr/team05",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCRESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    // ! 새로운 accessToken을 발급받았으니,
    // ! AsyncStorage에 새로운 accessToken 저장
    AsyncStorage.setItem("@user", newAccessToken);
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error: any) {
    console.log("getAccessTokenError: ", error);
  }
}
