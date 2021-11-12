import React from "react";

import IMP from "iamport-react-native";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGEDIN,
} from "../../../src/conponents/mypages/mypoint/mypoint.queries";

const Charge = () => {
  const { data: userData } = useQuery(FETCH_USER_LOGGEDIN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  /* [필수입력] 결제 종료 후, 라우터를 변경하고 결과를 전달합니다. */
  function callback(response: any) {
    // navigation.replace("PaymentResult", response);
    console.log("response", response);
    console.log("data", data);
    createPointTransactionOfLoading({
      variables: {
        impUid: String(response.imp_uid),
      },
    });
  }

  /* [필수입력] 결제에 필요한 데이터를 입력합니다. */
  const data = {
    pg: "html5_inicis",
    pay_method: "card",
    name: "Sleepy 포인트",
    merchant_uid: `mid_${new Date().getTime()}`,
    amount: "100",
    buyer_name: `송경환`,
    buyer_tel: "01012345678",
    buyer_email: `${userData.email}`,
    buyer_addr: "서울시 금천구 시흥대로 291",
    buyer_postcode: "08608",
    app_scheme: "example",
    // [Deprecated v1.0.3]: m_redirect_url
  };

  return (
    <>
      <IMP.Payment
        userCode={"imp49910675"} // 가맹점 식별코드
        data={data} // 결제 데이터
        callback={callback} // 결제 종료 후 콜백
      />
      {/* <MyPointUI Payment={Payment} /> */}
    </>
  );
};

export default Charge;
