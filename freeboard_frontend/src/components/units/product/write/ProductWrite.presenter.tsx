import { IProductWriteUIProps } from "./ProductWrite.types";
import * as S from "./ProductWrite.styles";
import { v4 as uuidv4 } from "uuid";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickButton)}>
      <S.Wrapper>
        <S.InputWrapper>
          <S.Label>상품이름</S.Label>
          <S.Name
            id="name"
            type="text"
            placeholder="이름을 입력해주세요."
            // onChange={props.onChangeInputs}
            {...props.register("name")}
          />
          <S.Error>{props.formState.errors.name?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <S.Remark
            id="remarks"
            type="text"
            placeholder="상품설명을 입력해주세요."
            // onChange={props.onChangeInputs}
            {...props.register("remarks")}
          />
          <S.Error>{props.formState.errors.remarks?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>가격</S.Label>
          <S.Title
            id="price"
            type="number"
            placeholder="가격을 입력해주세요."
            // onChange={props.onChangeInputs}
            {...props.register("price")}
          />
          <S.Error>{props.formState.errors.price?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            id="contents"
            type="textarea"
            placeholder="내용을 입력해주세요."
            // onChange={props.onChangeInputs}
            {...props.register("contents")}
          />
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}