import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";

import ModifyUI from "./Modify.present";
import { FETCH_USER_LOGGEDIN, UPDATE_USER } from "./Modify.queries";

const ModifyContainer = () => {
  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [myName, setMyName] = useState("");
  const [myPassword, setMyPassword] = useState("");

  function onChangeNickname(event: any) {
    setMyName(event);
    console.log(myName);
  }

  function onChangePassword(event: any) {
    setMyPassword(event);
    console.log(myPassword);
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
      onChangePassword={onChangePassword}
      onClickUpdateUserName={onClickUpdateUserName}
      myName={myName}
      data={data}
    />
  );
};

export default ModifyContainer;
