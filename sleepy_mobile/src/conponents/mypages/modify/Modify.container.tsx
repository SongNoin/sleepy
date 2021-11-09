import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";

import ModifyUI from "./Modify.present";
import { FETCH_USER_LOGGEDIN, UPDATE_USER } from "./Modify.queries";

const ModifyContainer = () => {
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [myName, setMyName] = useState("");

  function onChangeNickname(event: any) {
    setMyName(event);
    console.log(myName);
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
      console.log("닉네임 수정 성공");
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
