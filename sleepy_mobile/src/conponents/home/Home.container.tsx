import { useQuery } from "@apollo/client";
import React, { useState } from "react";

import HomeUI from "./Home.present";
import { FETCH_USED_ITEMS } from "./Home.quries";

const HomeContainer = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onPressMoreProduct = () => {
    setIsEdit(true);
  };

  const onPressCloseProduct = () => {
    setIsEdit(false);
  };

  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });

  return (
    <HomeUI
      data={data}
      isEdit={isEdit}
      onPressMoreProduct={onPressMoreProduct}
      onPressCloseProduct={onPressCloseProduct}
    />
  );
};

export default HomeContainer;
