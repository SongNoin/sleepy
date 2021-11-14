import {
  UploadsWrapper,
  UploadImage,
  UploadsButton,
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
          {" "}
          <> + </>
          <>Upload</>
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
