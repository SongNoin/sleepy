/* eslint-disable no-use-before-define */
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../App";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEMS,
} from "./Cart.queries";
import { useNavigation } from "@react-navigation/native";
import CartUI from "./Cart.present";
import { useMutation, useQuery } from "@apollo/client";

const CartContainer = () => {
  const [productInfo, setProductInfo]: any = useState([]);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { setId }: any = useContext(GlobalContext);
  const navigation = useNavigation();
  const { data, fetchMore }: any = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: true,
      search: "",
      page: 1,
    },
  });

  const onLoadMore = () => {
    if (!data) {
      return;
    }
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  useEffect(() => {
    onLoadMore();
  }, [data?.fetchUseditems]);

  useEffect(() => {
    AsyncStorage.getItem("@carts", async (_: any, result: any) => {
      const favoritePr = await JSON.parse(result);
      setProductInfo(favoritePr);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("@carts", async (_: any, result: any) => {
      const favoritePr = await JSON.parse(result);
      setProductInfo(favoritePr);
    });
  }, [AsyncStorage.getItem("@carts")]);

  const onPressDetail = (el: any) => {
    setId(el.id);
  };

  const deleteMyFavoritePr = (el: any) => () => {
    const afterDeleteMyFavoritePr = productInfo.filter(
      (favorite: any) => favorite.id !== el.id
    );
    AsyncStorage.setItem("@carts", JSON.stringify(afterDeleteMyFavoritePr));
  };

  const buyMyFavoritePr = (el: any) => async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: el.id,
        },
      });
      navigation.navigate("구매하기");
    } catch (error) {
      navigation.navigate("결제실패");
    }
  };

  return (
    <CartUI
      productInfo={productInfo}
      onPressDetail={onPressDetail}
      soldOutList={data?.fetchUseditems}
      deleteMyFavoritePr={deleteMyFavoritePr}
      buyMyFavoritePr={buyMyFavoritePr}
    />
  );
};

export default CartContainer;
