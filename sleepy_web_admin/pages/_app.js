import { createContext, useState, useEffect } from "react";
import Layout from "../src/components/commons/layout";
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend03-team.codebootcamp.co.kr/team05",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
