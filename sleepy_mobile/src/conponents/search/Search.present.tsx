import React from 'react';
import {
  SearchBar,
  SearchBarLine,
  SearchIcon,
  SearchPageView,
  ProductList,
  Search,
  Product,
  ProductImage,
  ProductName,
  ProductNameAndPrice,
  ProductPrice,
  ProductWrapper,
  FilterWrapper,
  Row,
  FilterFont,
  FilterToggle,
  FilterView,
  Row1,
  FilterView1,
  Row3,
} from "./Search.styles";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchUI = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      onMomentumScrollBegin={props.onLoadMore}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor:'white'}}
    >
    <SearchPageView>
      <Search>
        <SearchIcon
          source={require("../../../public/images/search/searchIcon.png")}
        />
        <SearchBar onChangeText={props.onChangeSearch} />
      </Search>
      <SearchBarLine />
    
    <FilterView1>
    <Row3>
    <FilterView>
      <FilterToggle onPress={props.priceToggleChange}>
        <FilterFont>금액</FilterFont> 
      </FilterToggle>
    </FilterView>

    <FilterView>
      <FilterToggle onPress={props.dateToggleChange}>
        <FilterFont>날짜</FilterFont> 
      </FilterToggle>
    </FilterView>
    </Row3>
    </FilterView1>
      
      {props.dateToggle && 
      <FilterView1>
        <Row>
          <FilterWrapper onPress={props.searchAllTime}>
            <FilterFont>모든 시간</FilterFont>
          </FilterWrapper>

          <FilterWrapper onPress={props.searchLastDay}>
            <FilterFont>지난 1일</FilterFont>
          </FilterWrapper>

          <FilterWrapper onPress={props.searchLastWeek}>
            <FilterFont>지난 1주</FilterFont>
          </FilterWrapper>
        </Row>
      </FilterView1>
      }

    {props.priceToggle && 
      <FilterView1>
        <Row>
          <FilterWrapper onPress={props.searchOneThousand}>
            <FilterFont>~1,000</FilterFont>
          </FilterWrapper>

          <FilterWrapper onPress={props.searchTenThousand}>
            <FilterFont>~10,000</FilterFont>
          </FilterWrapper>

          <FilterWrapper onPress={props.searchOneHundredThousand}>
            <FilterFont>~100,000</FilterFont>
          </FilterWrapper>
        </Row>

        <Row1>
          <FilterWrapper onPress={props.searchOneMillion}>
            <FilterFont>~1,000,000</FilterFont>
          </FilterWrapper>

          <FilterWrapper onPress={props.searchTemMillion}>
            <FilterFont>~10,000,000</FilterFont>
          </FilterWrapper>
        </Row1>
      </FilterView1>
      }

      <ProductList>
        {props.dataRes?.map((el:any)=>(
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
              <ProductName>
                {String(el.name.split("#")[1]).length > 60
                  ? `${String(el.name.split("#")[1]).substr(0, 61)}...`
                  : el.name.split("#")[1]}
              </ProductName>
              <ProductPrice>{`${el.price}원`}</ProductPrice>
            </ProductNameAndPrice>
          </Product>
        </ProductWrapper>
        ))}

        
        {!props.dataRes && props.data?.fetchUseditems.map((el:any)=>(
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
              <ProductName>
                {String(el.name.split("#")[1]).length > 60
                  ? `${String(el.name.split("#")[1]).substr(0, 61)}...`
                  : el.name.split("#")[1]}
              </ProductName>
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
