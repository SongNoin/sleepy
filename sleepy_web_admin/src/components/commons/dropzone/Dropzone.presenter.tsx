import {
  TempImage,
  TempWrapper,
  DropZoneWrapper,
  UploadButton,
  MainWrapper,
  TempMiddleWrapper,
  PrevImageWrapper,
  ButtonWrapper,
} from "./Dropzone.styles";

import Dropzone from "react-dropzone";

import { useState } from "react";
import { array } from "yup/lib/locale";

export default function DropZoneUI(props) {
  const [dropzoneUrl, setDropzoneUrl] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(true);

  const deleteImage = () => {
    setDeleteToggle(false);
  };

  const readImage = (acceptedFiles) => {
    console.log("=====", acceptedFiles);
    // 인풋 태그에 파일이 있는 경우

    let newArr = [];

    if (acceptedFiles) {
      // FileReader 인스턴스 생성

      for (let i = 0; i < acceptedFiles.length; i++) {
        const reader = new FileReader();

        // 이미지가 성공적으로 읽힌 경우 onload가 실행됩니다.
        reader.onload = (data: any) => {
          newArr[i] = data.target?.result;
          setDropzoneUrl([...newArr]);
        };
        reader.readAsDataURL(acceptedFiles[i]);
        props.onChangeFiles(acceptedFiles);
      }
    }

    console.log("111", dropzoneUrl);
  };

  return (
    <MainWrapper>
      <Dropzone
        onDrop={readImage}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
        multiple
      >
        {({ getRootProps, getInputProps }) => (
          <DropZoneWrapper {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag'n'drop images, or click to select files</p>
          </DropZoneWrapper>
        )}
      </Dropzone>

      <PrevImageWrapper>
        {props.isEdit ? (
          <>
            {deleteToggle
              ? props.defaultFileUrl?.map((el, index) => (
                  <TempWrapper key={index}>
                    <TempMiddleWrapper>
                      <TempImage
                        src={`https://storage.googleapis.com/${el}`}
                      ></TempImage>
                    </TempMiddleWrapper>
                  </TempWrapper>
                ))
              : dropzoneUrl.map((data, index) => (
                  <TempWrapper key={index}>
                    <TempMiddleWrapper>
                      <TempImage src={data}></TempImage>
                    </TempMiddleWrapper>
                  </TempWrapper>
                ))}
          </>
        ) : (
          <>
            {dropzoneUrl.length && deleteToggle ? (
              dropzoneUrl.map((data, index) => (
                <TempWrapper key={index}>
                  <TempMiddleWrapper>
                    <TempImage src={data}></TempImage>
                  </TempMiddleWrapper>
                </TempWrapper>
              ))
            ) : (
              <TempWrapper></TempWrapper>
            )}
          </>
        )}
      </PrevImageWrapper>
      {props.isEdit && (
        <ButtonWrapper>
          <UploadButton onClick={deleteImage}>이미지 전체삭제</UploadButton>
        </ButtonWrapper>
      )}
    </MainWrapper>
  );
}
