import React from 'react'
import { Button } from "react-native";

const LoginUI = (props) => {

    return (
        <Button title="구글 로그인" onPress={props.signIn} />
    )
}

export default LoginUI;