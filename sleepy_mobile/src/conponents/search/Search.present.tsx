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
  ProductWrapper
} from "./Search.styles";
import { ScrollView } from "react-native";


const SearchUI = (props:any) => {
  return (
    <ScrollView>
      <SearchPageView>
        <Search>
          <SearchIcon source={require("../../../public/images/search/searchIcon.png")} />
          <SearchBar onChangeText={props.onChangeSearch} />
        </Search>
        <SearchBarLine />
        <ProductList>
        {props.data?.fetchUseditems.map((el:any)=>(
          <ProductWrapper key={el._id} onPress={props.onPressProduct}>
            <Product >
              <ProductImage source={require("../../../public/images/search/temporaryImage.png")} />
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
