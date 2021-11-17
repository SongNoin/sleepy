import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "@emotion/native";
import { Alert, TouchableHighlight } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { gql, useMutation, useQuery } from "@apollo/client";
import { GlobalContext } from "../../../../App";

const Wrapper = styled.View`
  width: 100%;
  height: 60px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 10px 0px 10px;
`;

const FavoriteWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 13px;
`;

const FavoriteImage = styled.Image`
  width: 17.4px;
  height: 18.86px;
`;

const FavoriteCount = styled.Text`
  font-family: "NotoSans-Regular";
  color: #5b5bc0;
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  line-height: 13.62px;
`;

// const CartButton = styled.Text`
//   font-family: "NotoSans-Bold";
//   border: 1px solid #8888d0;
//   border-radius: 8px;
//   padding: 7px 44px 6px 44px;
//   color: #5b5bc0;
// `;

const CartButton = styled.TouchableHighlight`
  border: 1px solid #8888d0;
  border-radius: 8px;
  padding: 7px 44px 6px 44px;
`;

const CartText = styled.Text`
  font-family: "NotoSans-Bold";
  color: #5b5bc0;
`;

const BuyButton = styled.Text`
  font-family: "NotoSans-Bold";
  border: 1px solid #8888d0;
  border-radius: 8px;
  padding: 7px 44px 6px 44px;
  color: #5b5bc0;
`;

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      seller {
        email
        name
      }
    }
  }
`;

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

const FETCH_USED_ITEM_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      seller {
        name
      }
      createdAt
      pickedCount
    }
  }
`;

const NavigationDetail = () => {
  const { id, isFavorite, setIsFavorite }: any = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: id,
    },
  });

  const navigation = useNavigation();

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const { data: Ipickdata } = useQuery(FETCH_USED_ITEM_I_PICKED, {
    variables: { search: "" },
  });

  useEffect(() => {
    for (let i = 0; i < Ipickdata?.fetchUseditemsIPicked.length; i++) {
      if (Ipickdata?.fetchUseditemsIPicked[i]._id === id) {
        setIsFavorite(true);
        break;
      } else {
        setIsFavorite(false);
      }
    }
  }, [Ipickdata]);

  interface IProduct {
    productName: string;
    productContents: string;
    productPrice: number;
    seller: string;
    id: any;
    images: any;
  }

  const cartProduct: IProduct = {
    productName: data?.fetchUseditem.name,
    productContents: data?.fetchUseditem.contents,
    productPrice: data?.fetchUseditem.price,
    seller: data?.fetchUseditem.seller,
    id: data?.fetchUseditem._id,
    images: data?.fetchUseditem.images,
  };

  const onPressCart = async () => {
    const a: any = await AsyncStorage.getItem("@carts");
    const products = JSON.parse(a) || [];

    let isExists = false;
    products.forEach((el: any) => {
      if (el.id === id) {
        isExists = true;
      }
    });

    // 상품이 늦게 받아와지는 이슈가 있음. 그래서 일단 안받아와졌으면 알람띄우고 리턴
    if (!data?.fetchUseditem.name || !data?.fetchUseditem.price) {
      Alert.alert("", "상품이 아직 안받아와졌습니다!", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    if (isExists) {
      Alert.alert("", "장바구니에 이미 담으셨습니다!", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }

    products.push(cartProduct);
    AsyncStorage.setItem("@carts", JSON.stringify(products));
    navigation.navigate("장바구니");
  };

  async function onPressPicked() {
    await toggleUseditemPick({
      variables: { useditemId: id },
    });
    setIsFavorite((prev) => !prev);
  }

  return (
    <Wrapper>
      <FavoriteWrapper onPress={onPressPicked}>
        {isFavorite ? (
          <FavoriteImage
            source={require("../../../../public/images/list/infofavorite.png")}
          />
        ) : (
          <FavoriteImage
            source={require("../../../../public/images/home/moon-off.png")}
          />
        )}
        <FavoriteCount>{data?.fetchUseditem.pickedCount}</FavoriteCount>
      </FavoriteWrapper>
      <CartButton onPress={onPressCart}>
        <CartText>장바구니</CartText>
      </CartButton>
      <BuyButton onPress={() => navigation.navigate("결제하기")}>
        구매하기
      </BuyButton>
    </Wrapper>
  );
};

export default NavigationDetail;
