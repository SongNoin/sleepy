import React from "react";

import {
  MyMainView,
  ProfileWrapper,
  ProfileImage,
  ProfileInfoWrapper,
  ProfileNameWapper,
  ProfileName,
  ProfileNameNim,
  ProfileEmailWrapper,
  ProfileEmail,
  ProfileEmailContent,
  ProfilePointWrapper,
  ProfilePoint,
  ProfilePointContent,
  IconBackGround,
  IconWrapper,
  InsertImage,
  HistoryWrapper,
  HistoryTitleWrapper,
  BuyLineWrapper,
  PointLineWrapper,
  BuyHistory,
  PointHistory,
  BuyHistoryWrapper,
  PointHistoryWrapper,
  RowName,
  ColumnName,
  Row,
  Column,
  ColumnContent,
  ColumnContentWapper,
} from "./Mypage.styles";

import { useNavigation } from "@react-navigation/native";
import BoughtProductCard from "./Mypage.BoughtProductCard.present";
import { ScrollView } from "react-native-gesture-handler";

const MypageUI = (props: any) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <MyMainView>
        <ProfileWrapper>
          <ProfileImage
            source={require("../../../../public/images/mypage/mypageexmapleprofile.png")}
          />
          <ProfileInfoWrapper>
            <ProfileNameWapper>
              <ProfileName>{props.data?.fetchUserLoggedIn?.name}</ProfileName>
              <ProfileNameNim>님</ProfileNameNim>
            </ProfileNameWapper>
            <ProfileEmailWrapper>
              <ProfileEmail>이메일</ProfileEmail>
              <ProfileEmailContent>
                {props.data?.fetchUserLoggedIn?.email}
              </ProfileEmailContent>
            </ProfileEmailWrapper>
            <ProfilePointWrapper>
              <ProfilePoint>포인트</ProfilePoint>
              <ProfilePointContent>
                {props.data?.fetchUserLoggedIn?.userPoint.amount} 원
              </ProfilePointContent>
            </ProfilePointWrapper>
          </ProfileInfoWrapper>
        </ProfileWrapper>
        <IconWrapper>
          <IconBackGround onPress={() => navigation.navigate("내정보 수정")}>
            <InsertImage
              source={require("../../../../public/images/mypage/myinformation.png")}
            />
          </IconBackGround>
          <IconBackGround onPress={() => navigation.navigate("마이찜")}>
            <InsertImage
              source={require("../../../../public/images/mypage/favorite.png")}
            />
          </IconBackGround>
          <IconBackGround onPress={() => navigation.navigate("장바구니")}>
            <InsertImage
              source={require("../../../../public/images/mypage/cart.png")}
            />
          </IconBackGround>
          <IconBackGround onPress={() => navigation.navigate("포인트")}>
            <InsertImage
              source={require("../../../../public/images/mypage/charge.png")}
            />
          </IconBackGround>
        </IconWrapper>
        <HistoryWrapper>
          <HistoryTitleWrapper>
            <BuyLineWrapper isPoint={props.isPoint}>
              <BuyHistory
                onPress={props.onPressShowBuy}
                isPoint={props.isPoint}
              >
                구매내역
              </BuyHistory>
            </BuyLineWrapper>
            <PointLineWrapper isPoint={props.isPoint}>
              <PointHistory
                onPress={props.onPressShowPoint}
                isPoint={props.isPoint}
              >
                포인트내역
              </PointHistory>
            </PointLineWrapper>
          </HistoryTitleWrapper>
        </HistoryWrapper>
        {!props.isPoint ? (
          <BuyHistoryWrapper>
            <BoughtProductCard />
            <BoughtProductCard />
          </BuyHistoryWrapper>
        ) : (
          <PointHistoryWrapper>
            <RowName>
              <ColumnName>날짜</ColumnName>
              <ColumnName>내용</ColumnName>
              <ColumnName>거래 및 충전내역</ColumnName>
              <ColumnName>잔액</ColumnName>
            </RowName>
            {props.pointData?.fetchPointTransactions.map((el: any) => (
              <Row key={el._id}>
                <Column>{el.createdAt.slice(0, 10)}</Column>
                <ColumnContentWapper>
                  <ColumnContent>{el.status}</ColumnContent>
                </ColumnContentWapper>
                <Column>{el.amount.toLocaleString("ko-KR")}</Column>
                <Column>{el.balance.toLocaleString("ko-KR")}</Column>
              </Row>
            ))}
          </PointHistoryWrapper>
        )}
      </MyMainView>
    </ScrollView>
  );
};

export default MypageUI;
