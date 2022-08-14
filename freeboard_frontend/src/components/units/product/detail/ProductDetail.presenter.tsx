import { IProductDetailUIProps } from "./ProductDetail.types";
import * as S from "./ProductDetail.styles";
import Dompurify from "dompurify";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import router from "next/router";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  // 25-03-custom-hooks 참고
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Label>이름 : </S.Label>
        <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>상품상세 : </S.Label>
        <S.Remarks>{props.data?.fetchUseditem?.remarks}</S.Remarks>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>가격 : </S.Label>
        <S.Price>{props.data?.fetchUseditem?.price}</S.Price>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용 : </S.Label>
        <S.Contents>
          {typeof window !== "undefined" ? (
            <div
              style={{}}
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem?.contents),
              }}
            ></div>
          ) : (
            <div style={{}}></div>
          )}
          {/* {props.data?.fetchUseditem?.contents}{" "} */}
        </S.Contents>
      </S.InputWrapper>
      <S.Button onClick={onClickMoveToPage("/products")}>상품목록</S.Button>
      {/* <S.Button
        onClick={onClickMoveToPage(`/products/${router.query.productId}/edit`)}
      >
        수정하기
      </S.Button> */}
      <S.Button onClick={props.onClickMoveToEdit}>수정하기</S.Button>
      <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
    </S.Wrapper>
  );
}
