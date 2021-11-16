import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GlobalContext } from "../.././../../App";

import DetailUI from "./DetailMain.present";
import { FETCH_USED_ITEM } from "./DetailMain.quries";

const DetailContainer = () => {
  const { id, isReview } = useContext(GlobalContext);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: id },
  });

  return <DetailUI data={data} isReview={isReview} />;
};

export default DetailContainer;
