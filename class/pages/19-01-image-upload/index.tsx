import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // if (event.target.files?.length) {
    // const file = event.target.files[0];
    const file = event.target.files?.[0];
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url || "");
    } catch (error) {
      Modal.error({ content: "에러" });
    }
    // }
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
