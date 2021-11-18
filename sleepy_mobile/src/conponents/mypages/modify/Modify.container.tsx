import { useMutation, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { GlobalContext } from "../../../../App";

import ModifyUI from "./Modify.present";
import { FETCH_USER_LOGGEDIN, UPDATE_USER } from "./Modify.queries";

const ModifyContainer = () => {
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const { setMypage }: any = useContext(GlobalContext);
  const [myName, setMyName] = useState("");
  const navigation = useNavigation();

  function onChangeNickname(event: any) {
    setMyName(event);
  }

  async function onClickUpdateUserName() {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: myName,
          },
        },
      });
      Alert.alert("닉네임이 수정되었습니다~");
      navigation.navigate("마이페이지");
      setMypage("마이페이지");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ModifyUI
      onChangeNickname={onChangeNickname}
      onClickUpdateUserName={onClickUpdateUserName}
      myName={myName}
      data={data}
    />
  );
};

export default ModifyContainer;
