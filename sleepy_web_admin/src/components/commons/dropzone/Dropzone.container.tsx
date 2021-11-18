import DropZoneUI from "./Dropzone.presenter";

export default function DropZone01(props) {
  return (
    <DropZoneUI
      onChangeFiles={props.onChangeFiles}
      defaultFileUrl={props.defaultFileUrl}
      data={props.fetchData}
      isEdit={props.isEdit}
    />
  );
}
