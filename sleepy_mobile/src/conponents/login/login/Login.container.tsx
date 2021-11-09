import React from "react";
import LoginUI from "./Login.present";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { CREATE_USER, LOGIN_USER } from "./Login.queries";
import { useMutation } from "@apollo/client";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContainer = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [loginUser] = useMutation(LOGIN_USER);

  GoogleSignin.configure({
    webClientId:
      "549731169070-ev7rlasdm6iqgpnr7uncom1bhpgheg0q.apps.googleusercontent.com",
  });

  const signIn = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);

    try {
      await createUser({
        variables: {
          createUserInput: {
            email: userInfo.user?.email,
            password: userInfo.idToken?.substr(0, 15),
            name: String(userInfo.user?.name),
          },
        },
      });

      const result = await loginUser({
        variables: {
          email: userInfo.user.email,
          password: userInfo.idToken?.substr(0, 15),
        },
      });
      AsyncStorage.setItem("@user", result?.data?.loginUser.accessToken);
    } catch (_: any) {
      const result = await loginUser({
        variables: {
          email: userInfo.user.email,
          password: userInfo.idToken?.substr(0, 15),
        },
      });
      AsyncStorage.setItem("@user", result?.data?.loginUser.accessToken);
    }
  };

  return <LoginUI signIn={signIn} />;
};

export default LoginContainer;
