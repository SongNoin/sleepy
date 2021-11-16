import { useMutation, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { GlobalContext } from "../../../../App";

import ReviewUI from "./reviewwrite.presenter";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USED_ITEM,
} from "./reviewwrite.queries";

export default function ReviewContainer() {
  const { id } = useContext(GlobalContext);
  const [myContents, setMycontents] = useState("");
  const navigation = useNavigation();
  console.log("review", id);

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: id },
  });

  function onChangeContents(event: any) {
    setMycontents(event);
  }

  async function onClickRegisterReview() {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: id,
          createUseditemQuestionInput: {
            contents: myContents,
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_USEDITEM_QUESTIONS,
        //     variables: { useditemId: router.query.number },
        //   },
        // ],
      });
      Alert.alert("리뷰를 등록합니다~");
      navigation.navigate("마이페이지");
    } catch (error) {
      Alert.alert(error.message);
    }
  }
  return (
    <ReviewUI
      onChangeContents={onChangeContents}
      onClickRegisterReview={onClickRegisterReview}
      data={data}
    />
  );
}
