import React, { useContext, useState } from "react";
import {FETCH_USED_ITEMS} from "./Search.queries"
import _ from "lodash";

import SearchUI from "./Search.present";
import { useQuery } from "@apollo/client";
import { GlobalContext } from "../../../App";

const SearchContainer = () => {
  const {setId , id} = useContext(GlobalContext)
  const [search , setSearch] = useState("")
  const {data , refetch} = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: false,
      search: "",
      page: 1
    }
  })
  
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

  function onPressDetail(el:any) {
    setId(el._id)
    console.log("globalId: ",id)
    console.log("elId: ", el._id)
  }
  
  return <SearchUI 
    data={data} 
    onChangeSearch={onChangeSearch}
    onPressDetail={onPressDetail}
  />;
};

export default SearchContainer;
