import React, { useState } from "react";
import {FETCH_USED_ITEMS} from "./Search.queries"
import { useNavigation } from "@react-navigation/native";
import _ from "lodash";

import SearchUI from "./Search.present";
import { useQuery } from "@apollo/client";

const SearchContainer = () => {
  const [search , setSearch] = useState("")
  const navigation = useNavigation();
  const {data , refetch} = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: false,
      search: "",
      page: 1
    }
  })
  function onPressProduct() {
    navigation.navigate("상품 상세보기")
  }

  const getDebounce = _.debounce((data)=>{
    refetch({
      search: data,
      page: 1
    })
    setSearch(data)
  },500)

  function onChangeSearch(event:any) {
    getDebounce(event)
  }
  
  return <SearchUI 
    data={data} 
    onPressProduct={onPressProduct}
    onChangeSearch={onChangeSearch}
  />;
};

export default SearchContainer;
