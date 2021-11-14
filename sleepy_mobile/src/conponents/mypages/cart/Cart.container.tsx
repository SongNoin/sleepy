import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

import CartUI from "./Cart.present";

const CartContainer = () => {
  const [productInfo, setProductInfo]: any = useState([]);
  const [getPrices, setGetPrices]: any = useState("");

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

  return <CartUI productInfo={productInfo} getPrices={getPrices} />;
};

export default CartContainer;
