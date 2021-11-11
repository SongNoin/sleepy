import styled from "@emotion/native";

export const SearchPageView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
`;

export const SearchBar = styled.TextInput`
  width: 315px;
  height: 39.74px;
`

export const SearchBarLine = styled.View`
  width: 339px;
  border-bottom-width: 2px;
  border-bottom-color: #F1EEF6;
`

export const SearchIcon = styled.Image`
  height: 24px;
  width: 24px;
`
export const Search = styled.View`
  display: flex;
  flex-direction: row;
  width: 339px;
  height: 39.74px;
  align-items: center;
`

export const ProductList = styled.View`
  width: 339px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`

export const Product = styled.View`
  width: 339px;
  height: 119px;
  display: flex;
  flex-direction: row;
  border: 1px solid #E2E2FF;
  border-radius: 15px;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 12px;
`

export const ProductImage = styled.Image`
  width:95px;
  height:99px;
  border-radius: 15px;
`

export const ProductNameAndPrice = styled.View`
  width: 170px;
  height:97px;
  margin-left: 10px;
  
`

export const ProductName = styled.Text`
  font-family: "NotoSans-Bold";
  color: #3C3C3C;
`

export const ProductPrice = styled.Text`
  font-family: "NotoSans-Bold";
  color: #5B5BC0;
`

export const ProductWrapper = styled.TouchableOpacity``

