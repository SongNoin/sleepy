import { useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../App";

import ListUI from "./List.present";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_I_PICKED } from "./List.quries";

const ListContainer = () => {
  const { setId, id, setTagId, tagId } = useContext(GlobalContext);

  const [search, setSearch] = useState("");
  const [myCategory, setMyCategory] = useState(tagId + "#");

  const [myPickData, setMyPickData] = useState([]);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setSearch(data);
  });

  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
      search: myCategory,
    },
  });

  const { data: pickData } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  const onLoadMore = () => {
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

  const onPressDetail = (el) => {
    setId(el._id);
    console.log("555", el._id);
    console.log("433", id);
  };

  const onPressListCategory = (value) => {
    setTagId(value);
    getDebounce(value + "#");
  };

  useEffect(() => {
    setMyPickData(pickData?.fetchUseditemsIPicked.map((el) => el._id));
  }, [pickData?.fetchUseditemsIPicked]);

  return (
    <ListUI
      data={data}
      onPressDetail={onPressDetail}
      onPressListCategory={onPressListCategory}
      tagId={tagId}
      onLoadMore={onLoadMore}
      pickData={pickData}
      myPickData={myPickData}
    />
  );
};

export default ListContainer;
