import { useQuery } from "@apollo/client";
import _ from "lodash";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../App";

import ListUI from "./List.present";
import { FETCH_USED_ITEMS } from "./List.quries";

const ListContainer = () => {
  const { setId, id, setTagId, tagId } = useContext(GlobalContext);

  const [search, setSearch] = useState("");
  const [myCategory, setMyCategory] = useState(tagId + "#");

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

  return (
    <ListUI
      data={data}
      onPressDetail={onPressDetail}
      onPressListCategory={onPressListCategory}
      tagId={tagId}
      onLoadMore={onLoadMore}
    />
  );
};

export default ListContainer;
