import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>(); // 타입 : 파일
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [callGraphql] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data.uploadFile.url; // 스토리지에 다운로드 받을 수 있는 주소
    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "안녕하세요",
          contents: "반갑습니다",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // string일 때 저장(typescript)
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
        setFile(file);
      }
    };
    // 2. 가짜(내 컴퓨터 전용) URL 생성 (
    const result = URL.createObjectURL(file);
    console.log(result);
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickGraphqlApi}>게시물 등록하기</button>
    </>
  );
}
