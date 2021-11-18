import React, { useContext, useState } from "react";
import { FETCH_USED_ITEMS } from "./Search.queries";
import _ from "lodash";

import SearchUI from "./Search.present";
import { useQuery } from "@apollo/client";
import { GlobalContext } from "../../../App";
import {
  Product,
  ProductImage,
  ProductName,
  ProductNameAndPrice,
  ProductPrice,
  ProductWrapper,
} from "./Search.styles";
import { useNavigation } from "@react-navigation/native";

const SearchContainer = () => {
  const { setId, id } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: false,
      search: "",
      page: 1,
    },
  });
  const navigation = useNavigation();

  const getDebounce = _.debounce((data) => {
    refetch({
      search: data,
      page: 1,
    });
    setSearch(data);
  }, 500);

  function onChangeSearch(event: any) {
    getDebounce(event);
  }

  function onPressDetail(el: any) {
    setId(el._id);
    console.log("globalId: ", id);
    console.log("elId: ", el._id);
  }

  const onLoadMore = () => {
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const renderItem = ({ item }: any) => {
    return (
      <ProductWrapper
        key={item._id}
        onPress={() => {
          navigation.navigate("상품 상세보기", {
            id: onPressDetail(item),
          });
        }}
      >
        <Product>
          <ProductImage
            source={{
              uri: `https://storage.googleapis.com/${item.images[0]}`,
            }}
          />
          <ProductNameAndPrice>
            <ProductName>
              {String(item.name.split("#")[1]).length > 60
                ? `${String(item.name.split("#")[1]).substr(0, 61)}...`
                : item.name.split("#")[1]}
            </ProductName>
            <ProductPrice>{`${item.price}원`}</ProductPrice>
          </ProductNameAndPrice>
        </Product>
      </ProductWrapper>
    );
  };

  return (
    <SearchUI
      data={data}
      onChangeSearch={onChangeSearch}
      onPressDetail={onPressDetail}
      onLoadMore={onLoadMore}
      renderItem={renderItem}
    />
  );
};

export default SearchContainer;
