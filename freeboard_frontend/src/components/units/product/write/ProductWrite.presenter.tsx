import { IProductWriteUIProps } from "./ProductWrite.types";
import * as S from "./ProductWrite.styles";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

// prettier-ignore
const ToastEditor = dynamic(() => import("../../../../..//src/commons/libraries/toast"),
  { ssr: false });

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Label>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Label>
        <form onSubmit={props.handleSubmit(props.onClickButton)}>
          {/* <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdateProduct : props.onClickUploadProduct
      )} */}
          <S.InputWrapper>
            <S.Label>상품이름</S.Label>
            <S.Name
              id="name"
              type="text"
              placeholder="이름을 입력해주세요."
              {...props.register("name")}
              defaultValue={props.data?.fetchUseditem.name}
            />
            <S.Error>{props.formState.errors.name?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품설명</S.Label>
            <S.Remark
              id="remarks"
              type="text"
              placeholder="상품설명을 입력해주세요."
              {...props.register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>가격</S.Label>
            <S.Price
              id="price"
              type="number"
              placeholder="가격을 입력해주세요."
              {...props.register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <S.Error>{props.formState.errors.price?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>내용</S.Label>
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
          </S.InputWrapper>
          <ToastEditor
            editorRef={props.editorRef}
            onChangeContent={props.onChangeContents}
            defaultValue={props.data?.fetchUseditem.contents}
          />
          <S.SubmitButton
            onClick={props.handleSubmit(
              props.isEdit ? props.onClickUpdate : props.onClickButton
            )}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </form>

        <S.GPSWrapper>
          <S.GPS id="map"></S.GPS>
        </S.GPSWrapper>
      </S.Wrapper>
    </>
  );
}
