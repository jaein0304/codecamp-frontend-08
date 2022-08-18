import { ChangeEvent, useRef, useState } from "react";
import Uploads02UI from "./Uploads02.presenter";
import { IUploads02Props } from "./Uploads02.types";

export default function Uploads02(props) {
  const fileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState("");

  const onClickUploadImage = () => {
    fileRef.current?.click();
  };
  const onChangeImage = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한: 5MB");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data: any) => {
      setFileUrl(data.target.result);
      props.onChangeFiles(file, props.index);
    };
  };

  return (
    <Uploads02UI
      fileUrl={fileUrl}
      fileRef={fileRef}
      defaultFileUrl={props.defaultFileUrl}
      onClickUploadImage={onClickUploadImage}
      onChangeImage={onChangeImage}
    />
  );
}
