import {
  UploadButton,
  UploadImage,
  UploadImageHidden,
} from "./profileupload.styles";

export default function ProfileUploadUI(props) {
  return (
    <>
      <>
        {props.fileUrl || props.defaultPicture ? (
          <UploadImage
            onClick={props.onClickUploadImage}
            src={
              props.fileUrl ||
              `https://storage.googleapis.com/${props.defaultPicture}`
            }
          />
        ) : (
          <UploadButton onClick={props.onClickUploadImage}>
            <div>프로필 이미지 업로드</div>
          </UploadButton>
        )}
        <UploadImageHidden
          ref={props.fileRef}
          type="file"
          onChange={props.onChangeImage}
        />
      </>
    </>
  );
}
