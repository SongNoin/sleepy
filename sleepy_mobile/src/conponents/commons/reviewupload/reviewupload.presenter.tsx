import React from "react";

import {
  ReviewPhotoUpload,
  Plus,
  Preview,
  PreviewUpload,
  Wrappaer,
} from "./reviewupload.styles";

const ReviewUploadUI = (props: any) => {
  return (
    <>
      <Wrappaer onPress={props.onPressOpenAlbum}>
        {props.imageUri.uri === "" ? (
          <ReviewPhotoUpload>
            <Plus>+</Plus>
          </ReviewPhotoUpload>
        ) : (
          <PreviewUpload>
            <Preview
              imageStyle={{ borderRadius: 10 }}
              source={props.imageUri}
            />
          </PreviewUpload>
        )}
      </Wrappaer>
    </>
  );
};

export default ReviewUploadUI;
