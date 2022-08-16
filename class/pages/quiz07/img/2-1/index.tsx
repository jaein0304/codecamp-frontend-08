import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../../../src/commons/libraries/validationFile";

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
const initialInputs = { writer: "", password: "", title: "", contents: "" };
export default function ImageOptimizationPage() {
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File>();
  const [inputs, setInputs] = useState(initialInputs);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  // file
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImgUrl(String(data.target?.result));
      setFile(file);
    };
  };

  // input
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
  };

  // button
  const onClickSave = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data.uploadFile.url;
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            images: [url],
          },
        },
      });
      console.log(result);
    } catch (error) {
      console.log("저장안됨");
    }
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeInputs} id="writer" />
      <br />
      비밀번호 :
      <input type="password" onChange={onChangeInputs} id="password" />
      <br />
      제목 : <input type="text" onChange={onChangeInputs} id="title" />
      <br />
      내용 : <input type="text" onChange={onChangeInputs} id="contents" />
      <br />
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button onClick={onClickSave}>저장하기</button>
    </>
  );
}
