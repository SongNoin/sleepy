import React from "react";

import {
  ProfilePhotoUpload,
  Plus,
  Preview,
  PreviewUpload,
  Wrappaer,
} from "./profileupload.styles";

const ProfileUploadUI = (props: any) => {
  return (
    <>
      <Wrappaer onPress={props.onPressOpenAlbum}>
        {props.imageUri.uri === "" ? (
          <ProfilePhotoUpload>
            <Plus>+</Plus>
          </ProfilePhotoUpload>
        ) : (
          <PreviewUpload>
            <Preview
              imageStyle={{ borderRadius: 50 }}
              source={props.imageUri}
            />
          </PreviewUpload>
        )}
      </Wrappaer>
    </>
  );
};

export default ProfileUploadUI;
