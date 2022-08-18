import {
  UploadImage,
  UploadButton,
  UploadImageHidden,
} from "./Uploads02.styles";
import { IUploads02UIProps } from "./Uploads02.types";

export default function Uploads02UI(props) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <UploadImage
          onClick={props.onClickUploadImage}
          src={
            props.fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <UploadButton onClick={props.onClickUploadImage}>
          <img src="/images/images.webp" />
        </UploadButton>
      )}
      <UploadImageHidden
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeImage}
      />
    </>
  );
}
