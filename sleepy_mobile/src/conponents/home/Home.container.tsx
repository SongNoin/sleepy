import { useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../App";

import HomeUI from "./Home.present";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_OF_THE_BEST } from "./Home.quries";

const HomeContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { setId, setTagId } = useContext(GlobalContext);

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

  const { data: bestData } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const onPressCategory = (value) => {
    setTagId(value);

    console.log("666", value);
  };

  const onPressDetail = (el) => {
    setId(el._id);
    console.log("444", el._id);
  };

  return (
    <HomeUI
      data={data}
      isEdit={isEdit}
      onPressMoreProduct={onPressMoreProduct}
      onPressCloseProduct={onPressCloseProduct}
      onPressDetail={onPressDetail}
      onPressCategory={onPressCategory}
      bestData={bestData}
    />
  );
};

export default HomeContainer;
