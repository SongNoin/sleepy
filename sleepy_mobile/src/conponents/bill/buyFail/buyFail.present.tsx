import React from 'react'
import {
    BuyView,
    PurchaseImg,
    Phrase,
    ButtonBackGround,
    ButtonText,
  } from "./buyFail.styles";
  

const BuyFailUI = (props:any) => {
    
    return (
        <BuyView>
            <PurchaseImg
                source={require("../../../../public/images/detail/buyFail.png")}
            />
            <Phrase>잔액이 부족합니다!</Phrase>
            <ButtonBackGround onPress={props.onPressMoveToMyPage}>
                <ButtonText>
                충전 하러 가기
                </ButtonText>
            </ButtonBackGround>
        </BuyView>
    )
}

export default BuyFailUI


