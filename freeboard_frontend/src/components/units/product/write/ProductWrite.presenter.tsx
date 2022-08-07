import { IProductWriteUIProps } from "./ProductWrite.types";
import * as S from "./ProductWrite.styles";
import { v4 as uuidv4 } from "uuid";
export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.InputWrapper>
          <S.Label>상품이름</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={props.onChangeInputs}
          />
          <S.Error>{props.inputsError.name}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <S.Remark
            type="text"
            placeholder="상품설명을 입력해주세요."
            onChange={props.onChangeInputs}
          />
          <S.Error>{props.inputsError.remarks}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>가격</S.Label>
          <S.Title
            type="text"
            placeholder="가격을 입력해주세요."
            onChange={props.onChangeInputs}
          />
          <S.Error>{props.inputsError.price}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            type="textarea"
            placeholder="내용을 입력해주세요."
            onChange={props.onChangeInputs}
          />
          <S.Error>{props.inputsError.contents}</S.Error>
        </S.InputWrapper>

        {/* <S.ImageWrapper>
          <S.Label>이미지</S.Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImageWrapper> */}

        <S.ButtonWrapper>
          <S.SubmitButton onClick={props.onClickSubmit}>
            등록하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
