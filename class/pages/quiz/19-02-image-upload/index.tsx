/* 
1. 게시물을 작성하기 위한 작성자, 비밀번호, 제목, 내용 4개의 입력창을 만들어 주세요. o
2. 이미지를 올릴 file 태그를 만들어 주세요. o
3. file 태그를 활용해 이미지가 변경되면 uploadFile API를 사용하여 이미지를 업로드 해 주세요. o 
4. 업로드한 결과로 받은 url을 state에 저장하여 업로드된 이미지가 화면에 나타나도록 만들어 주세요.o 
5. [저장하기] 버튼을 만들고, 해당 버튼을 클릭하면, createBoard API를 활용하여 작성자, 비밀번호, 제목, 내용, 이미지URL을 등록해 주세요.
6. file 태그를 숨기고, 좋아요 아이콘을 누르면 file 태그가 눌리도록 연결해 보세요.
⇒ 힌트) useRef를 사용해 주세요.
    힌트) 좋아요 아이콘은 ant-Design에 있습니다. 
    */

import { LikeTwoTone } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";

// query
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

// style
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const ImageSelectWrapper = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  /* border: 3px solid red; */
  margin: auto;
  cursor: pointer;
  size: 50px;
  /* font-size: 50px; */
`;

const ImageSelectHideWrapper = styled.div`
  display: none;
  border: 3px solid blue;
`;

const ApiWrapper = styled.button`
  width: 200px;
  height: 50px;
  background-color: #eed0ff;
  border: none;
  border-radius: 30px;
  margin: auto;
  margin-top: 30px;
`;

// container
export default function ImageUploadPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState();

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [callGraphql] = useMutation(CREATE_BOARD);
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onClickGraphqlApi = async () => {
    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (!uploadFile) return;
    // if (!file) return;
    // if (!event.target.files) return;

    try {
      // 1. uploadFile API 요청하기(요청 결과 URL 받아오기)
      const result = await uploadFile({ variables: { file } });
      console.log(result.data.uploadFile.url);

      // 2. 요청 결과 URL을 state에 저장하기
      setImages(result.data.uploadFile.url);
    } catch (error) {
      Modal.error({ content: "에러발생!!" });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };
  return (
    <>
      <Wrapper>
        <InputWrapper>
          작성자: <input type="text" onChange={onChangeWriter} />
        </InputWrapper>
        <InputWrapper>
          비밀번호: <input type="password" onChange={onChangePassword} />
        </InputWrapper>
        <InputWrapper>
          제목: <input type="text" onChange={onChangeTitle} />
        </InputWrapper>
        <InputWrapper>
          내용: <input type="text" onChange={onChangeContents} />
        </InputWrapper>

        <ImageSelectWrapper onClick={onClickImage}>
          <LikeTwoTone
            style={{ margin: "auto", fontSize: "30px" }}
            twoToneColor="pink"
            size={50}
          />
        </ImageSelectWrapper>
        <ImageSelectHideWrapper>
          <input
            style={{ display: "none" }}
            type="file"
            ref={fileRef}
            onChange={onChangeFile}
            // accept="image/jpeg"
          />
        </ImageSelectHideWrapper>
        <img src={`https://storage.googleapis.com/${images}`} />

        <ApiWrapper onClick={onClickGraphqlApi}>GRAPHQL-API 요청</ApiWrapper>
      </Wrapper>
    </>
  );
}
