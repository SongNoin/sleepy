import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GlobalContext } from "../../../../App";

import FavoriteUI from "./Favorite.present";
import {
  FETCH_USEDITEMS_COUNT_IPICKED,
  FETCH_USEDITEM_IPICKED,
} from "./Favorite.queries";

const FavoriteContainer = () => {
  const { setId }: any = useContext(GlobalContext);

  const { data } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: { search: "" },
  });
  const { data: pickCountData } = useQuery(FETCH_USEDITEMS_COUNT_IPICKED);
  const onPressDetail = (el: any) => {
    setId(el._id);
  };
  return (
    <FavoriteUI
      data={data}
      pickCountData={pickCountData}
      onPressDetail={onPressDetail}
    />
  );
};

export default FavoriteContainer;
