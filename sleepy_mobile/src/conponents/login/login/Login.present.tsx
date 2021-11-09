import React from 'react'
import { Text } from 'react-native';
import { ButtonText, GoogleLoginButton, GoogleLogo, LogoImg, Row, Wrapper } from './Login.styles';

const LoginUI = (props) => {

    return (
        <Wrapper>
            <LogoImg 
                source={
                    require("../../../../public/images/login/loginLogo.png")} 
            />

            <GoogleLoginButton onPress={props.signIn} >
                <Row>
                    <GoogleLogo source={require("../../../../public/images/login/googleLogo.png")} />
                    <ButtonText>구글 아이디로 로그인하기</ButtonText>
                </Row>
            </GoogleLoginButton>
        </Wrapper>
    )
}

export default LoginUI;