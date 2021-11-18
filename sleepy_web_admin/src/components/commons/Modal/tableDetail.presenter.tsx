import Dompurify from "dompurify";
import {
  UploadImage,
  Wrapper,
  Title,
  InnerWrapper,
  BasicWrapper,
  ContentWrapper,
  ImagesWrapper,
  LeftWrapper,
  LeftBasicWrapper,
  RightWrapper,
  RightContentWrapper,
  Name,
  NameInput,
  ContentInput,
} from "./tableDetail.styles";

export default function TableDetailUI(props) {
  return (
    <Wrapper>
      <Title>상품 자세히보기</Title>
      <InnerWrapper>
        <BasicWrapper>
          <LeftWrapper>
            <Name>상품 명</Name>
          </LeftWrapper>
          <RightWrapper>
            <NameInput>
              {props.fetchData?.fetchUseditem?.name.split("#")[1]}
            </NameInput>
          </RightWrapper>
        </BasicWrapper>
        <ContentWrapper>
          <LeftBasicWrapper>
            <Name>상품 설명</Name>
          </LeftBasicWrapper>
          <RightContentWrapper>
            {process.browser && (
              <ContentInput
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.fetchData?.fetchUseditem?.contents
                  ),
                }}
              />
            )}
          </RightContentWrapper>
        </ContentWrapper>
        <BasicWrapper>
          <LeftWrapper>
            <Name>가격</Name>
          </LeftWrapper>
          <RightWrapper>
            <NameInput>
              {props.fetchData?.fetchUseditem?.price
                .toLocaleString("ko-KR")
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </NameInput>
          </RightWrapper>
        </BasicWrapper>
        <BasicWrapper>
          <LeftWrapper>
            <Name>카테고리</Name>
          </LeftWrapper>
          <RightWrapper>
            <NameInput>{props.fetchData?.fetchUseditem?.tags}</NameInput>
          </RightWrapper>
        </BasicWrapper>
        <ImagesWrapper>
          <LeftBasicWrapper>
            <Name>이미지 첨부</Name>
          </LeftBasicWrapper>
          <RightWrapper>
            {props.fetchData?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <UploadImage
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </RightWrapper>
        </ImagesWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}
