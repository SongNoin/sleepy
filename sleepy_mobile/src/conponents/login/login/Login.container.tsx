import React, { useContext } from "react";
import LoginUI from "./Login.present";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { CREATE_USER, LOGIN_USER } from "./Login.queries";
import { useMutation } from "@apollo/client";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../../../../App";

const LoginContainer = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [loginUser] = useMutation(LOGIN_USER);
  const {setAccessToken}:any = useContext(AuthContext)

  GoogleSignin.configure({
    webClientId:
      "549731169070-ev7rlasdm6iqgpnr7uncom1bhpgheg0q.apps.googleusercontent.com",
  });

  async function CreateAndLogin(userInfo:any) {
    // * 3 회원가입과 동시에 로그인하는 로직
    // 각각 에러 핸들링을 위해 try catch를 써줬음
    // 그리고 에러마다 각각의 에러를 알아볼 수 있게 어떤 에러인지 설명해놨음

    try {
      await createUser({
        variables: {
          createUserInput: {
            email: userInfo.user?.email,
            password: userInfo.idToken?.substr(0, 15),
            name: String(userInfo.user?.name),
          },
        }
      })
    } catch(error) {
      console.log("CreateUserError: ",error)
    }

    try {
      const result = await loginUser({
        variables: {
          email: userInfo.user.email,
          password: userInfo.idToken?.substr(0, 15),
        }
      })
      console.log(result.data?.loginUser.accessToken)
      setAccessToken(result.data?.loginUser.accessToken)
      // ! 구글 로그인 하면서 AsyncStorage에 accessToken 저장
      AsyncStorage.setItem("@user" , result.data?.loginUser.accessToken )
    } catch(error) {
      console.log("LoginUserError: ",error)
    }
  }

  // GoogleSignin
  const signIn = async () => {
    let userInfo;

    try{
      await GoogleSignin.hasPlayServices();
       userInfo = await GoogleSignin.signIn();
      // console.log(userInfo);
    }catch(error) {
      console.log("SignInError: ",error)
    }
    
    if(!userInfo) return
    
    // * 1. 먼저 구글 로그인 시도 
    // 구글 로그인 한 userInfo가 있으면 밑의 try catch 실행
    // 구글 로그인 한 userInfo 없으면 그냥 리턴

    try {
      const result = await loginUser({
        variables: {
          email: userInfo.user.email,
          password: userInfo.idToken?.substr(0, 15),
        }
      })
      // console.log(result.data?.loginUser.accessToken)
      setAccessToken(result.data?.loginUser.accessToken)
      // ! 구글 로그인 하면서 AsyncStorage에 accessToken 저장
      AsyncStorage.setItem("@user" , result.data?.loginUser.accessToken)
      // * 2. 먼저 구글 로그인 시도 
      // 구글 로그인 시도해서 된다면?
        // 기존에 회원가입을 한 경우임
    } catch (error) {
      // 구글 로그인 시도해서 안된다면?
        // 기존에 회원가입을 안 한 경우임
      console.log("FirstLoginError: ", error)
      // * 3. 회원가입과 동시에 로그인하는 로직실행
      CreateAndLogin(userInfo)
    }
  };

  return <LoginUI signIn={signIn} />;
};

export default LoginContainer;
