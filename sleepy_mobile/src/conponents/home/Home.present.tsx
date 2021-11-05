import React from "react";

import {useNavigation} from "@react-navigation/native"

import {HomeView, HomeText,CategoryWrapper,CategoryIcon,DetailProduct,DetailProductText} from "./Home.styles"

const HomeUI = () => {

    const navigation = useNavigation()

    return(
        <HomeView>
            <HomeText>
                여기는 메인 페이지 입니다.
            </HomeText>
            <CategoryWrapper onPress={() => navigation.navigate("상품 리스트")}>
                <CategoryIcon source={require("../../../public/images/home/pillow.png")} />
            </CategoryWrapper>

            <DetailProduct onPress={() => navigation.navigate("상품 상세보기")}>
                <DetailProductText>디테일 페이지 이동</DetailProductText>
            </DetailProduct>

        </HomeView>
    )
}

export default HomeUI