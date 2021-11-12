import React, { useContext } from "react";
import PayUI from "./Pay.present";
import {CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, FETCH_USED_ITEM, FETCH_USER_LOGGED_IN} from "./Pay.queries"
import { useMutation, useQuery } from "@apollo/client";
import { GlobalContext } from "../../../../App";
import { useNavigation } from "@react-navigation/native";

const PayContainer = () => {
  const {id}:any = useContext(GlobalContext)
  const {data} = useQuery(FETCH_USED_ITEM , {
    variables: { useditemId : String(id)}
  })
  const {data:login} = useQuery(FETCH_USER_LOGGED_IN)
  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)
  const navigation = useNavigation();

  const onPressPay = async() => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: id}
      })
      navigation.navigate("구매하기")
    } catch(_:any) {
      navigation.navigate("결제실패")
    }
  }


  return <PayUI 
    data={data}
    login={login}
    onPressPay={onPressPay}
  />;
};

export default PayContainer;
