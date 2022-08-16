import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
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
  // const [imageUrl, setImageUrl] = useState("");
  // const [file, setFile] = useState<File>(); // 타입 : 파일
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [callGraphql] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    // 1. Promise.all 을 안썼을 때
    /*   const resultFile0 = await uploadFile({ variables: { file: files[0] } }); // key, value 다르니까
    const resultFile1 = await uploadFile({ variables: { file: files[1] } }); // key, value 다르니까
    const resultFile2 = await uploadFile({ variables: { file: files[2] } }); // key, value 다르니까
    const url0 = resultFile0.data.uploadFile.url; // 스토리지에 다운로드 받을 수 있는 주소
    const url1 = resultFile1.data.uploadFile.url; // 스토리지에 다운로드 받을 수 있는 주소
    const url2 = resultFile2.data.uploadFile.url; // 스토리지에 다운로드 받을 수 있는 주소
    const resultUrls = [url0, url1, url2]; */

    // 2. Promise.all 을 썼을 때
    /* const results = await Promise.all([
      uploadFile({ variables: { file: files[0] } }),
      uploadFile({ variables: { file: files[1] } }),
      uploadFile({ variables: { file: files[2] } }),
    ]);
    console.log(results); // const results = [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : "")); // const resultUrls = [url0, url1, url2] // el이 있으면 url 뽑고, 없으면 빈 문자열
 */
    // 3. Promise.all 리팩토링 (사진이 여러장일 때)

    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } })) // el 이 있으면
    );

    console.log(results); // const results = [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : "")); // const resultUrls = [url0, url1, url2] // el이 있으면 url 뽑고, 없으면 빈 문자열

    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "안녕하세요",
          contents: "반갑습니다",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
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

          const tempUrls = [...imageUrls]; // 얕은 복사, 원본이 바뀌면 안되니까
          tempUrls[index] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };
  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickGraphqlApi}>게시물 등록하기</button>
    </>
  );
}
