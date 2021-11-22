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
  InsertFavoriteImage,
  InsertText,
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
  ScrollView,
} from "./Mypage.styles";

import { useNavigation } from "@react-navigation/native";
import BoughtProductCard from "./Mypage.BoughtProductCard.present";

const MypageUI = (props: any) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <MyMainView>
        <ProfileWrapper>
          {props.data?.fetchUserLoggedIn.picture ? (
            <ProfileImage
              source={{
                uri: `https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`,
              }}
            />
          ) : (
            <ProfileImage
              source={require("../../../../public/images/mypage/mypagedefaultprofile.png")}
            />
          )}
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
                {props.data?.fetchUserLoggedIn?.userPoint.amount
                  .toLocaleString("ko-KR")
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                원
              </ProfilePointContent>
            </ProfilePointWrapper>
          </ProfileInfoWrapper>
        </ProfileWrapper>
        <IconWrapper>
          <IconBackGround onPress={() => navigation.navigate("내정보 수정")}>
            <InsertImage
              source={require("../../../../public/images/mypage/myinformation.png")}
            />
            <InsertText>내 정보</InsertText>
          </IconBackGround>
          <IconBackGround onPress={() => navigation.navigate("마이찜")}>
            <InsertFavoriteImage
              source={require("../../../../public/images/mypage/favorite.png")}
            />
            <InsertText>찜목록</InsertText>
          </IconBackGround>
          <IconBackGround onPress={() => navigation.navigate("장바구니")}>
            <InsertImage
              source={require("../../../../public/images/mypage/cart.png")}
            />
            <InsertText>장바구니</InsertText>
          </IconBackGround>
          <IconBackGround onPress={() => navigation.navigate("포인트")}>
            <InsertImage
              source={require("../../../../public/images/mypage/charge.png")}
            />
            <InsertText>충전하기</InsertText>
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
            {props.buyData?.fetchPointTransactionsOfBuying.map((el: any) => (
              <BoughtProductCard
                key={el._id}
                el={el}
                onPressMoveToReviewWrite={props.onPressMoveToReviewWrite}
                onPressMoveToDetail={props.onPressMoveToDetail}
              />
            ))}
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
                  <ColumnContent status={el.status}>{el.status}</ColumnContent>
                </ColumnContentWapper>
                <Column>
                  {el.amount
                    .toLocaleString("ko-KR")
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Column>
                <Column>
                  {el.balance
                    .toLocaleString("ko-KR")
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Column>
              </Row>
            ))}
          </PointHistoryWrapper>
        )}
      </MyMainView>
    </ScrollView>
  );
};

export default MypageUI;
