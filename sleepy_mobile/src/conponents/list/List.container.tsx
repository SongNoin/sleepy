import { useQuery } from "@apollo/client";
import React from "react";

import ListUI from "./List.present";
import { FETCH_USED_ITEMS } from "./List.quries";

const ListContainer = () => {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });

  return <ListUI data={data} />;
};

export default ListContainer;
