import React, { useContext, useState } from "react";
import { FETCH_USED_ITEMS } from "./Search.queries";
import _ from "lodash";

import SearchUI from "./Search.present";
import { useQuery } from "@apollo/client";
import { GlobalContext } from "../../../App";

const SearchContainer = () => {
  const { setId, id } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [dataRes , setDataRes] = useState(null)
  
  const [priceToggle , setPriceToggle] = useState(false)
  const [dateToggle , setDateToggle] = useState(false)
  
  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()
  
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: false,
      search: "",
      page: 1,
    },
  });
  
  const getDebounce = _.debounce((data) => {
    refetch({
      search: data,
      page: 1,
    });
    setSearch(data);
  }, 500);

  function onChangeSearch(event: any) {
    getDebounce(event);
  }

  function onPressDetail(el: any) {
    setId(el._id);
    console.log("globalId: ", id);
    console.log("elId: ", el._id);
  }

  const onLoadMore = () => {
    if(!data) {
      return;
    }
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const priceToggleChange = () => {
    setPriceToggle((prev)=>!prev)
    setDateToggle(false)
  }

  const dateToggleChange = () => {
    setDateToggle((prev)=>!prev)
    setPriceToggle(false)
  }

  const searchAllTime = () => {
    setDataRes(data?.fetchUseditems)
  }

  const searchLastDay = () => {
    const arr: string[] = []
    for(let i=0; i<=1; i++) {
      const newArr = new Date(year, month, day-i).toLocaleDateString().split('/')
      const res = `20${newArr[2]}-${newArr[0]}-${newArr[1]}`
      arr.push(res)
    }
    const filterRes = data?.fetchUseditems.filter((el:any)=>{
      return arr.includes(el.createdAt.slice(0,10))
    })
    setDataRes(filterRes)
  }

  const searchLastWeek = () => {
    const arr: string[] = []
    for(let i=0; i<=7; i++) {
      const newArr = new Date(year, month, day-i).toLocaleDateString().split('/')
      const res = `20${newArr[2]}-${newArr[0]}-${newArr[1]}`
      arr.push(res)
    }
    const filterRes = data?.fetchUseditems.filter((el:any)=>{
      return arr.includes(el.createdAt.slice(0,10))
    })
    setDataRes(filterRes)
  }

  const searchOneThousand = () => {
    const result = data?.fetchUseditems.filter((el:any)=>{
      return Number(el.price) <= 1000
    })
    setDataRes(result)
  }

  const searchTenThousand = () => {
    const result = data?.fetchUseditems.filter((el:any)=>{
      return Number(el.price) <= 10000
    })
    setDataRes(result)
  }

  const searchOneHundredThousand = () => {
    const result = data?.fetchUseditems.filter((el:any)=>{
      return Number(el.price) <= 100000
    })
    setDataRes(result)
  }

  const searchOneMillion = () => {
    const result = data?.fetchUseditems.filter((el:any)=>{
      return Number(el.price) <= 1000000
    })
    setDataRes(result)
  }

  const searchTemMillion = () => {
    const result = data?.fetchUseditems.filter((el:any)=>{
      return Number(el.price) <= 10000000
    })
    setDataRes(result)
  }
  
  return (
    <SearchUI
      data={data}
      onChangeSearch={onChangeSearch}
      onPressDetail={onPressDetail}
      onLoadMore={onLoadMore}
      priceToggle={priceToggle}
      priceToggleChange={priceToggleChange}
      dateToggleChange={dateToggleChange}
      dateToggle={dateToggle}
      searchLastDay={searchLastDay}
      searchLastWeek={searchLastWeek}
      searchAllTime={searchAllTime}
      dataRes={dataRes}
      searchOneThousand={searchOneThousand}
      searchTenThousand={searchTenThousand}
      searchOneHundredThousand={searchOneHundredThousand}
      searchOneMillion={searchOneMillion}
      searchTemMillion={searchTemMillion}
    />
  );
};

export default SearchContainer;
