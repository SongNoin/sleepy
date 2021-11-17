import RegisterUI from "./register.presenter";

import { useMutation, useQuery } from "@apollo/client";

import { useState } from "react";
import {
  CREATE_USEDITEM,
  FETCH_USED_ITEM,
  UPLOAD_FILE,
} from "./register.queries";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./register.validation";

export default function Register() {
  const [age, setAge] = useState("");
  const [tag, setTag] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null, null]);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
    setTag(event.target.value);
  };

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation(CREATE_USEDITEM);

  const [myName, setMyName] = useState("");
  const [myRemark, setMyRemark] = useState("");
  const [myPrice, setMyPrice] = useState("");

  function onChangeMyContent(value) {
    setValue("myContents", value === "<p><br></p>" ? "" : value);
    trigger("myContents");
  }

  function onChangeMyName(event) {
    setMyName(event.target.value);
  }
  function onChangeMyRemark(event) {
    setMyRemark(event.target.value);
  }
  function onChangeMyPrice(event) {
    setMyPrice(event.target.value);
  }

  async function onClickUploadProudct(data) {
    try {
      const uploadFiles = files.map((el) =>
        el ? uploadFile({ variables: { file: el } }) : null
      );
      const results = await Promise.all(uploadFiles);
      const myImages = results.map((el) => el?.data.uploadFile.url || "");

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: myName,
            remarks: myRemark,
            contents: data.myContents,
            price: Number(myPrice),
            tags: tag,
            images: myImages,
          },
        },
      });
      console.log(result);
      alert("상품이 등록되었습니다");
    } catch (error) {
      console.log(error.message);
    }
  }

  function onChangeFiles(file: any, index: any) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <RegisterUI
      age={age}
      handleChange={handleChange}
      onChangeMyContent={onChangeMyContent}
      onClickUploadProudct={onClickUploadProudct}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onChangeMyName={onChangeMyName}
      onChangeMyRemark={onChangeMyRemark}
      onChangeMyPrice={onChangeMyPrice}
      onChangeFiles={onChangeFiles}
    />
  );
}
