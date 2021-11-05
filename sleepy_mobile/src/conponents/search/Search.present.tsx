import React from "react";

import { gql, useQuery } from "@apollo/client";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

import { SearchPageView, SearchPageText } from "./Search.styles";
import { Text, View } from "react-native";

const SearchUI = () => {
  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  });
  return (
    <SearchPageView>
      <SearchPageText>여기는 서치페이지 입니다.</SearchPageText>
      {data?.fetchBoards.map((el: any) => (
        <View key={el?._id}>
          <Text>{el?.title}</Text>
          <Text>{el?.writer}</Text>
          <Text>{el?.contents}</Text>
        </View>
      ))}
    </SearchPageView>
  );
};

export default SearchUI;
