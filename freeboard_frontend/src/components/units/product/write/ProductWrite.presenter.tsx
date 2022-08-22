import { IProductWriteUIProps } from "./ProductWrite.types";
import * as S from "./ProductWrite.styles";
import dynamic from "next/dynamic";
import Uploads02 from "../../../commons/uploads/02/Uploads02.container";
import { v4 as uuidv4 } from "uuid";
import KakaoMapPage from "../../map";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
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
          <KakaoMapPage
            address={
              props.address
                ? props.address
                : props.data?.fetchUseditem.useditemAddress?.address || ""
            }
            setGps={props?.setGPS}
          />
          <S.AddressWrapper>
            <S.AddressSearchWrapper>
              <S.ZipCode
                placeholder="07250"
                readOnly={true}
                value={
                  props.zipcode
                    ? props.zipcode
                    : props.data?.fetchUseditem.useditemAddress?.zipcode
                }
              />
              <S.AddressSearch onClick={props.onClickAddressSearch}>
                우편번호 검색
              </S.AddressSearch>
              {props.isOpen && (
                <Modal
                  visible={true}
                  title={"우편번호 검색"}
                  onOk={props.onClickAddressSearch}
                  onCancel={props.onClickAddressSearch}
                >
                  <DaumPostcode
                    onComplete={props.onClickCompleteAddressSearch}
                  />
                </Modal>
              )}
            </S.AddressSearchWrapper>
            <S.Address
              readOnly={true}
              value={
                props.address ||
                props.data?.fetchUseditem.useditemAddress?.address ||
                ""
              }
            />
          </S.AddressWrapper>
        </S.GPSWrapper>
        <S.ImgWrapper>
          {new Array(3).fill(1).map((el, index) => (
            <Uploads02
              type="button"
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFiles={props.onChangeFile}
              // onChangeFileUrls={props.onChangeFileUrls}
              defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
            />
          ))}
          {/* <input type="file" onChange={props.onChangeFile(0)} />
            <input type="file" onChange={props.onChangeFile(1)} />
            <input type="file" onChange={props.onChangeFile(2)} />
            <img src={props.imageUrls[0]} />
            <img src={props.imageUrls[1]} />
            <img src={props.imageUrls[2]} /> */}
        </S.ImgWrapper>
      </S.Wrapper>
    </>
  );
}
