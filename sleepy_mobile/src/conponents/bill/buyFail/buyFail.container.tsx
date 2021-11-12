import React, { useContext } from 'react'
import BuyFailUI from './buyFail.present'
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from '../../../../App';

const BuyFailContainer = () => {
    const {setIsMyPage} = useContext(GlobalContext)
    const navigation = useNavigation();
    const onPressMoveToMyPage = () => {
        navigation.navigate("마이페이지")
        setIsMyPage(true);
    }
    return <BuyFailUI onPressMoveToMyPage={onPressMoveToMyPage} />
}

export default BuyFailContainer

