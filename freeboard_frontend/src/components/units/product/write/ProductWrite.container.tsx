import { useRouter } from "next/router";
import ProductWriteUI from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USE_ITEM, UPDATE_USE_ITEM, UPLOAD_FILE } from "./ProductWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { IProductWriteProps } from "./ProductWrite.types";
import { FETCH_USED_ITEM } from "../detail/ProductDetail.queries";
import { checkValidationImage } from "../../../commons/uploads/01/Uploads01.validation";

const schema = yup.object({
  name: yup.string().max(30, "30자 이내로 입력해주세요.").required("상품이름을 입력해주세요"),
  remarks: yup.string().max(100, "100자 이내로 입력해주세요.").required("상품 목록을 입력해주세요"),
  price: yup.number().required("가격을 입력해주세요."),
  contents: yup.string().max(1000, "1000자 이내로 입력해주세요.").required("내용을 입력해주세요."),
});

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();
  const editorRef = useRef<Editor>(); // 토스트

  // 이미지
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // 주소
  const [zipcode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [GPS, setGPS] = useState({
    lat: 0,
    lng: 0,
  });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USE_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USE_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  // const [myLat, setMyLat] = useState(null);
  // const [myLng, setMyLng] = useState(null);
  // const [myAddress, setMyAddress] = useState("");

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 내용
  const onChangeContents = (value: string) => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("contents", inputs);
    trigger("contents");
  };

  // 주소
  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev); // on off
  };

  const onClickCompleteAddressSearch = (data: any) => {
    setIsOpen((prev) => !prev);
    setAddress(data.address);
    setZipCode(data.zonecode);
    setAddressDetail("");
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };
  // 상품 등록
  const onClickButton = async (data) => {
    // 이미지 (0817)
    // const img = await Promise.all(files.map((el) => el && uploadFile({ variables: { file: el } })));
    // const imgUrl = img.map((el) => (el ? el.data.uploadFile.url : ""));
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: fileUrls,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
              lat: GPS.lat,
              lng: GPS.lng,
            },
          },
        },
      });
      console.log("상품등록");
      console.log(result);
      console.log(result.data?.createUseditem._id);
      router.push(`./${result.data?.createUseditem._id}`);
    } catch (error) {
      alert("상품이 등록되지 않았습니다.");
      console.log(error);
    }
  };

  // 미리보기 버령..
  const [fileUrls, setFileUrls] = useState(["", ""]);

  // 프리로드 버린 이미지
  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  // 이미지
  // const onChangeFile = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   const isValid = checkValidationImage(file);
  //   if (!isValid) return;

  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(file);
  //   fileReader.onload = (data) => {
  //     if (typeof data.target?.result === "string") {
  //       console.log(data.target?.result);

  //       const tempUrls = [...imageUrls];
  //       tempUrls[index] = data.target?.result;
  //       setImageUrls(tempUrls);

  //       const tempFiles = [...files];
  //       tempFiles[index] = file;
  //       setFiles(tempFiles);
  //     }
  //   };
  // };
  // const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // const onChangeFileUrls = (fileUrl: string, index: number) => {
  //   const newFileUrls = [...fileUrls];
  //   newFileUrls[index] = fileUrl;
  //   setFileUrls(newFileUrls);
  // };

  // 상품 수정
  const onClickUpdate = async (data) => {
    console.log("1111");

    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangeFiles = currentFiles !== defaultFiles;

    const updateProductInput: IUpdateUseditemInput = {};
    if (data.name) updateProductInput.name = data.name;
    if (data.remarks) updateProductInput.remarks = data.remarks;
    if (data.price) updateProductInput.price = data.price;
    if (data.contents) updateProductInput.contents = data.contents;
    if (isChangeFiles) updateProductInput.images = fileUrls;

    try {
      console.log("2222");
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            images: fileUrls,
          },
          useditemId: String(router.query.productId),
        },
      });
      alert("상품수정이 완료되었습니다.");
      router.push(`/products/${result.data?.updateUseditem._id}`);
    } catch (error) {
      alert("상품수정이 완료되지 않았습니다.");
      console.log("3333");
      console.log(error);
    }
  };

  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickButton={onClickButton}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      // onChangeFile={onChangeFile}
      // onChangeFileUrls={onChangeFileUrls}
      // onChangeFile2={onChangeFile2}
      editorRef={editorRef}
      isEdit={props.isEdit}
      // data={props.data}
      // myAddress={myAddress}
      data={data}
      imageUrls={imageUrls}
      onClickAddressSearch={onClickAddressSearch}
      onClickCompleteAddressSearch={onClickCompleteAddressSearch}
      onChangeAddressDetail={onChangeAddressDetail}
      GPS={GPS}
      setGPS={setGPS}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
