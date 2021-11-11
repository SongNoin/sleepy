import { useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../App";

import HomeUI from "./Home.present";
import { FETCH_USED_ITEMS } from "./Home.quries";

const HomeContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { setId } = useContext(GlobalContext);

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
    />
  );
};

export default HomeContainer;
