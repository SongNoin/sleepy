import RegisterUI from "./register.presenter";

import { useMutation, useQuery } from "@apollo/client";

import { useEffect, useState } from "react";
import {
  CREATE_USEDITEM,
  UPDATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPLOAD_FILE,
} from "./register.queries";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./register.validation";
import { useRouter } from "next/router";

export default function Register(props) {
  const router = useRouter();

  const [age, setAge] = useState("");
  const [tag, setTag] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [files, setFiles] = useState([null, null, null]);

  const { data: fetchData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.Id },
  });

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
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

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
            name: tag + "#" + myName,
            remarks: myRemark,
            contents: data.myContents,
            price: Number(myPrice),
            tags: tag,
            images: myImages,
          },
        },
      });
      alert("상품이 등록되었습니다");
      router.push(`/productstable`);
    } catch (error) {
      console.log(error.message);
    }
  }

  // function onChangeFiles(file: any, index: any) {
  //   const newFiles = [...files];
  //   newFiles[index] = file;
  //   setFiles(newFiles);
  // }

  function onChangeFiles(acceptedFiles) {
    const newFiles = [...acceptedFiles];
    newFiles[acceptedFiles] = acceptedFiles;
    setFiles(newFiles);
  }

  async function onClickUpdateProduct(data) {
    const myUpdateUseditemInput: any = {};
    if (myName) myUpdateUseditemInput.name = tag + "#" + myName;
    if (myRemark) myUpdateUseditemInput.remarks = myRemark;
    if (data.myContents) myUpdateUseditemInput.contents = data.myContents;
    if (Number(myPrice)) myUpdateUseditemInput.price = Number(myPrice);
    if (tag) myUpdateUseditemInput.tags = tag;

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateUseditemInput.images = nextImages;

    if (fetchData?.fetchUseditem.images.length) {
      const prevImages = [...fetchData?.fetchUseditem.images];
      myUpdateUseditemInput.images = prevImages.map(
        (el, index) => nextImages[index] || el
      );
    } else {
      myUpdateUseditemInput.images = nextImages;
    }

    try {
      await updateUseditem({
        variables: {
          updateUseditemInput: myUpdateUseditemInput,
          useditemId: router.query.Id,
        },
      });
      alert("상품이 수정되었습니다");
      router.push(`/productstable`);
    } catch (error: any) {}
  }

  useEffect(() => {
    if (!props.isEdit && fetchData?.fetchUseditem) {
      setValue("myName", fetchData?.fetchUseditem.name);
      setValue("myRemarks", fetchData?.fetchUseditem.remarks);
      setValue("myContents", fetchData?.fetchUseditem.contents);
      setValue("myPrice", fetchData?.fetchUseditem.price);
      setValue("tag", fetchData?.fetchUseditem.tags);
    }
  }, [!props.isEdit, fetchData?.fetchUseditem]);

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
      onClickUpdateProduct={onClickUpdateProduct}
      isEdit={props.isEdit}
      fetchData={fetchData}
    />
  );
}
