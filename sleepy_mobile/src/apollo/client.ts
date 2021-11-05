import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://34.64.161.16/team05",
  cache: new InMemoryCache(),
});
