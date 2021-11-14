import React from "react";
import {
  SearchBar,
  SearchBarLine,
  SearchIcon,
  SearchPageView,
  Search,
  Product,
  ProductList,
  ProductImage,
  ProductNameAndPrice,
  ProductName,
  ProductPrice,
  ProductWrapper,
} from "./Search.styles";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <SearchPageView>
        <Search>
          <SearchIcon
            source={require("../../../public/images/search/searchIcon.png")}
          />
          <SearchBar onChangeText={props.onChangeSearch} />
        </Search>
        <SearchBarLine />
        <ProductList>
          {props.data?.fetchUseditems.map((el: any) => (
            <ProductWrapper
              key={el._id}
              onPress={() => {
                navigation.navigate("상품 상세보기", {
                  id: props.onPressDetail(el),
                });
              }}
            >
              <Product>
                <ProductImage
                  source={{
                    uri: `https://storage.googleapis.com/${el.images[0]}`,
                  }}
                />
                <ProductNameAndPrice>
                  <ProductName>{el.name}</ProductName>
                  <ProductPrice>{`${el.price}원`}</ProductPrice>
                </ProductNameAndPrice>
              </Product>
            </ProductWrapper>
          ))}
        </ProductList>
      </SearchPageView>
    </ScrollView>
  );
};

export default SearchUI;
