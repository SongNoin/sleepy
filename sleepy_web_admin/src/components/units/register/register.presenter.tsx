import { Wrapper, All, UploadImage } from "./register.styles";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import ReactQuil01 from "./register.quill";

import Uploads from "../../commons/uploads/Uploads.container";

export default function RegisterUI(props) {
  return (
    <>
      <All>
        <form onSubmit={props.handleSubmit(props.onClickUploadProudct)}>
          <Wrapper>
            상품명: <input type="text" onChange={props.onChangeMyName} />
            한줄요약: <input type="text" onChange={props.onChangeMyRemark} />
            상품설명 : <ReactQuil01 onChange={props.onChangeMyContent} />
            판매가격:
            <input type="text" onChange={props.onChangeMyPrice} />
          </Wrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{ minWidth: 120, marginTop: "10px", marginBottom: "10px" }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
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
                  <MenuItem value={"암막커튼"}>암막 커튼</MenuItem>
                  <MenuItem value={"수면 오일"}>수면 오일</MenuItem>
                  <MenuItem value={"수면 용품"}>수면 용품</MenuItem>
                  <MenuItem value={"수면 보조제"}>수면 보조제</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div style={{ marginLeft: "30px" }}>
              {props.tag?.length ? `#${props.tag}` : ""}
            </div>
          </div>
          <UploadImage>
            {new Array(3).fill(1).map((el, index) => (
              <Uploads
                onChangeFiles={props.onChangeFiles}
                key={`${el}_${index}`}
                index={index}
                type="submit"
              />
            ))}
          </UploadImage>
          <button>업로드</button>
        </form>
      </All>
    </>
  );
}
