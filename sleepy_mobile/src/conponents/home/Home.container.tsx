import { useQuery } from "@apollo/client";
import React from "react";

import HomeUI from "./Home.present";
import { FETCH_USED_ITEMS } from "./Home.quries";

const HomeContainer = () => {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });

  return <HomeUI data={data} />;
};

export default HomeContainer;
