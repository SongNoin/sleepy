import React, { useContext } from 'react'
import LoginUI from "./Login.present";
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { CREATE_USER , LOGIN_USER } from "./Login.queries";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../../../App";

const LoginContainer = () => {
    const [createUser] = useMutation(CREATE_USER);
    const [loginUser] = useMutation(LOGIN_USER);
    const {accessToken , setAccessToken } = useContext(AuthContext)
    
    GoogleSignin.configure({
        webClientId:
          '549731169070-ev7rlasdm6iqgpnr7uncom1bhpgheg0q.apps.googleusercontent.com',
    });

  const signIn = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn()
    console.log(userInfo)
    
    try {
       const createUserRes = await createUser({
            variables: {
                createUserInput: {
                    email: userInfo.user?.email,
                    password: userInfo.idToken?.substr(0,15),
                    name: String(userInfo.user?.name)
                }
            }
        })

        const result = await loginUser({
            variables: {
                email: userInfo.user.email,
                password: userInfo.idToken?.substr(0,15)
            }
        })
        setAccessToken(result?.data?.loginUser.accessToken)
        // console.log(createUserRes.data?.createUser.name)
        console.log(result.data?.loginUser.accessToken)
    } catch (_:any) {
        const result = await loginUser({
            variables: {
                email : userInfo.user.email,
                password: userInfo.idToken?.substr(0,15)
            }
        })
        setAccessToken(result?.data?.loginUser.accessToken)
        console.log(result.data?.loginUser.accessToken);
    }
  };


    return <LoginUI signIn={signIn} />
}

export default LoginContainer;