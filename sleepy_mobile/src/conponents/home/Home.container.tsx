import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../App";

import HomeUI from "./Home.present";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./Home.quries";

const HomeContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [myPickData, setMyPickData] = useState([]);
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

  const { data: pickData } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  const onPressCategory = (value) => {
    setTagId(value);

    console.log("666", value);
  };

  const onPressDetail = (el) => {
    setId(el._id);
    console.log("444", el._id);
  };

  useEffect(() => {
    setMyPickData(pickData?.fetchUseditemsIPicked.map((el) => el._id));
  }, [pickData?.fetchUseditemsIPicked]);

  return (
    <HomeUI
      data={data}
      isEdit={isEdit}
      onPressMoreProduct={onPressMoreProduct}
      onPressCloseProduct={onPressCloseProduct}
      onPressDetail={onPressDetail}
      onPressCategory={onPressCategory}
      bestData={bestData}
      pickData={pickData}
      myPickData={myPickData}
    />
  );
};

export default HomeContainer;
