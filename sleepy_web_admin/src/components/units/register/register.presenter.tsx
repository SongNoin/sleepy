import { Wrapper, All } from "./register.styles";

import Select from "@mui/material/Select";
import { useMutation } from "@apollo/client";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { CREATE_USEDITEM } from "./register.queries";

export default function RegisterUI() {
  const [age, setAge] = useState("");
  const [tag, setTag] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
    setTag(event.target.value);
  };
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [myName, setMyName] = useState("");
  const [myRemark, setMyRemark] = useState("");
  const [myContent, setMyContent] = useState("");
  const [myPrice, setMyPrice] = useState("");

  function onChangeMyName(event) {
    setMyName(event.target.value);
  }
  function onChangeMyRemark(event) {
    setMyRemark(event.target.value);
  }
  function onChangeMyContent(event) {
    setMyContent(event.target.value);
  }
  function onChangeMyPrice(event) {
    setMyPrice(event.target.value);
  }

  async function onClickUploadProudct() {
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: myName,
            remarks: myRemark,
            contents: myContent,
            price: Number(myPrice),
            tags: tag,
          },
        },
      });
      alert("상품이 등록되었습니다");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <All>
        <Wrapper>
          상품명: <input type="text" onChange={onChangeMyName} />
          한줄요약: <input type="text" onChange={onChangeMyRemark} />
          상품설명: <input type="text" onChange={onChangeMyContent} />
          판매가격: <input type="text" onChange={onChangeMyPrice} />
        </Wrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ minWidth: 120, marginTop: "10px", marginBottom: "10px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
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
            {tag.length ? `#${tag}` : ""}
          </div>
        </div>
        <button onClick={onClickUploadProudct}>업로드</button>
      </All>
    </>
  );
}
