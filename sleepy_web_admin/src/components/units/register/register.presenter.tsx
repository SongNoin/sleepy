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
  ButtonWrapper,
  UploadButton,
} from "./register.styles";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import ReactQuil01 from "./register.quill";

import Uploads from "../../commons/uploads/Uploads.container";

export default function RegisterUI(props) {
  return (
    <Wrapper>
      <Title>상품 등록</Title>
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdateProduct : props.onClickUploadProudct
        )}
      >
        <InnerWrapper>
          <BasicWrapper>
            <LeftWrapper>
              <Name>상품 명</Name>
            </LeftWrapper>
            <RightWrapper>
              <NameInput
                type="text"
                onChange={props.onChangeMyName}
                placeholder="상품 명을 입력해주세요."
                defaultValue={props.fetchData?.fetchUseditem.name}
              />
            </RightWrapper>
          </BasicWrapper>
          <ContentWrapper>
            <LeftBasicWrapper>
              <Name>상품 설명</Name>
            </LeftBasicWrapper>
            <RightContentWrapper>
              <ReactQuil01
                onChange={props.onChangeMyContent}
                isEdit={props.isEdit}
                defaultValue={props.fetchData?.fetchUseditem.contents}
              />
            </RightContentWrapper>
          </ContentWrapper>
          <BasicWrapper>
            <LeftWrapper>
              <Name>가격</Name>
            </LeftWrapper>
            <RightWrapper>
              <NameInput
                type="text"
                onChange={props.onChangeMyPrice}
                placeholder="상품 가격을 입력해주세요."
                defaultValue={props.fetchData?.fetchUseditem.price}
              />
            </RightWrapper>
          </BasicWrapper>
          <BasicWrapper>
            <LeftWrapper>
              <Name>카테고리</Name>
            </LeftWrapper>
            <RightWrapper>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "40px",
                }}
              >
                <Box
                  sx={{
                    minWidth: 120,
                    marginTop: "10px",
                    marginBottom: "10px",
                    border: "2px solid #5b5bc0",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl fullWidth>
                    {!props.isEdit ? (
                      <InputLabel id="demo-simple-select-label">
                        카테고리
                      </InputLabel>
                    ) : (
                      <InputLabel id="demo-simple-select-label">
                        {props.fetchData?.fetchUseditem.tags}
                      </InputLabel>
                    )}

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={props.age}
                      label="Age"
                      onChange={props.handleChange}
                    >
                      <MenuItem value={"배게"}>배게</MenuItem>
                      <MenuItem value={"이불"}>이불</MenuItem>
                      <MenuItem value={"잠옷"}>잠옷</MenuItem>
                      <MenuItem value={"도서"}>도서</MenuItem>
                      <MenuItem value={"암막커튼"}>암막 커튼</MenuItem>
                      <MenuItem value={"오일"}>오일</MenuItem>
                      <MenuItem value={"수면용품"}>수면 용품</MenuItem>
                      <MenuItem value={"수면보조제"}>수면 보조제</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div style={{ marginLeft: "30px" }}>
                  {props.tag?.length ? `#${props.tag}` : ""}
                </div>
              </div>
            </RightWrapper>
          </BasicWrapper>
          <ImagesWrapper>
            <LeftBasicWrapper>
              <Name>이미지 첨부</Name>
            </LeftBasicWrapper>
            <RightWrapper>
              <UploadImage>
                {new Array(3).fill(1).map((el, index) => (
                  <Uploads
                    onChangeFiles={props.onChangeFiles}
                    defaultFileUrl={
                      props.fetchData?.fetchUseditem.images?.[index]
                    }
                    key={`${el}_${index}`}
                    index={index}
                    type="submit"
                  />
                ))}
              </UploadImage>
            </RightWrapper>
          </ImagesWrapper>
        </InnerWrapper>
        <ButtonWrapper>
          {!props.isEdit ? (
            <UploadButton onClick={props.onClickUploadProudct}>
              상품 등록하기
            </UploadButton>
          ) : (
            <UploadButton onClick={props.onClickUpdateProduct}>
              상품 수정하기
            </UploadButton>
          )}
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
}
