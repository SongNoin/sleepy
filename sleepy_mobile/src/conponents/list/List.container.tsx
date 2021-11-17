import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GlobalContext } from "../../../App";

import ListUI from "./List.present";
import { FETCH_USED_ITEMS } from "./List.quries";

const ListContainer = () => {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });

  const { setId, id, setTagId, tagId } = useContext(GlobalContext);

  const onPressDetail = (el) => {
    setId(el._id);
    console.log("555", el._id);
    console.log("433", id);
  };

  const onPressListCategory = (value) => {
    setTagId(value);
  };

  return (
    <ListUI
      data={data}
      onPressDetail={onPressDetail}
      onPressListCategory={onPressListCategory}
      tagId={tagId}
    />
  );
};

export default ListContainer;
