import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return; // 파일이 없으면 return, 이거 안쓰면 타입스크립트가 파일이 없을 때 어쩔꺼냐고 알려줌

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    // 1. 진짜URL 생성 (어디서든 볼 수 있음)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // string일 때 저장(typescript)
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
      }
    };
    // 2. 가짜(내 컴퓨터 전용) URL 생성 (
    const result = URL.createObjectURL(file);
    console.log(result);

    // 둘중 아무거나 해도 상관없다고 말씀해주심, 2번은 나온지 얼마되지 않아 최신 브라우저에서만 작동할 수 있음. 상황에 맞게
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </>
  );
}
