import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../App";

import CartUI from "./Cart.present";

const CartContainer = () => {
  const [productInfo, setProductInfo]: any = useState([]);
  const [getPrices, setGetPrices]: any = useState("");
  const { setId }: any = useContext(GlobalContext);

  useEffect(() => {
    AsyncStorage.getItem("@carts", async (_: any, result: any) => {
      const a = await JSON.parse(result);
      setProductInfo(a);
      let prices = 0;
      a.forEach((el: any) => {
        prices += el.productPrice;
      });
      setGetPrices(prices);
    });
  }, []);

  const onPressDetail = (el: any) => {
    setId(el.id);
  };

  return (
    <CartUI
      productInfo={productInfo}
      getPrices={getPrices}
      onPressDetail={onPressDetail}
    />
  );
};

export default CartContainer;
