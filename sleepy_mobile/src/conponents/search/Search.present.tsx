import React from "react";
import {
  SearchBar,
  SearchBarLine,
  SearchIcon,
  SearchPageView,
  ProductList,
  Search,
} from "./Search.styles";
import { FlatList } from "react-native";

const SearchUI = (props: any) => {
  return (
    <SearchPageView>
      <Search>
        <SearchIcon
          source={require("../../../public/images/search/searchIcon.png")}
        />
        <SearchBar onChangeText={props.onChangeSearch} />
      </Search>
      <SearchBarLine />
      <ProductList>
        <FlatList
          data={props.data?.fetchUseditems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          onEndReached={props.onLoadMore}
          renderItem={props.renderItem}
        />
      </ProductList>
    </SearchPageView>
  );
};

export default SearchUI;
