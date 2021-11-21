import {
  UploadsWrapper,
  UploadImage,
  UploadsButton,
  BtnImg,
  UploadFileHidden,
} from "./Uploads.styles";

export default function UploadsUI(props: any) {
  return (
    <UploadsWrapper>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={
            props.fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
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
