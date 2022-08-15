import { useRouter } from "next/router";
import ProductWriteUI from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USE_ITEM, UPDATE_USE_ITEM } from "./ProductWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { IProductUpdateInput, IProductWriteProps } from "./ProductWrite.types";
import { FETCH_USED_ITEM } from "../detail/ProductDetail.queries";

const schema = yup.object({
  name: yup
    .string()
    .max(30, "30자 이내로 입력해주세요.")
    .required("상품이름을 입력해주세요"),
  remarks: yup
    .string()
    .max(100, "100자 이내로 입력해주세요.")
    .required("상품 목록을 입력해주세요"),
  price: yup.number().required("가격을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "1000자 이내로 입력해주세요.")
    .required("내용을 입력해주세요."),
});

declare const window: typeof globalThis & {
  kakao: any;
};
export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();

  // 토스트
  const editorRef = useRef<Editor>();

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

  // 상품 등록
  const onClickButton = async (data) => {
    // console.log("check");
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
          },
        },
      });
      console.log("asd");
      console.log(result);
      console.log(result.data?.createUseditem._id);
      router.push(`./${result.data?.createUseditem._id}`);
    } catch (error) {
      alert("상품이 등록되지 않았습니다.");
      console.log(error);
    }
  };

  // 상품 수정
  const onClickUpdate = async (data) => {
    console.log("1111");

    const updateProductInput: IProductUpdateInput = {};
    if (data.name) updateProductInput.name = data.name;
    if (data.remarks) updateProductInput.remarks = data.remarks;
    if (data.price) updateProductInput.price = data.price;
    if (data.contents) updateProductInput.contents = data.contents;

    try {
      console.log("2222");
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
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

  // 지도
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=201efd5d14b849dfe6b2fd1350785ee1&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(35.1892, 126.8279),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        const markerPosition = new window.kakao.maps.LatLng(
          37.54699,
          127.09598
        ); // 마커가 표시될 위치입니다

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: markerPosition,
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);
  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickButton={onClickButton}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      editorRef={editorRef}
      isEdit={props.isEdit}
      // data={props.data}
      // myAddress={myAddress}
      data={data}
    />
  );
}
