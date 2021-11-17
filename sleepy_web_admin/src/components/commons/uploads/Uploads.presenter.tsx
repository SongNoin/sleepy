import {
  UploadsWrapper,
  UploadImage,
  UploadsButton,
  BtnImg,
  UploadFileHidden,
} from "./Uploads.styles";

export default function UploadsUI(props) {
  return (
    <UploadsWrapper>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={props.fileUrl}
        ></UploadImage>
      ) : (
        <UploadsButton onClick={props.onClickUpload} type="button">
          <BtnImg src="/images/uploadbtn.png" />
        </UploadsButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      ></UploadFileHidden>
    </UploadsWrapper>
  );
}
