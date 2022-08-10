import { IProductDetailUIProps } from "./ProductDetail.types";
import * as S from "./ProductDetail.styles";
export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <S.Wrapper>
      <S.Name>{props.data?.fetchUseditem?.name}</S.Name>
      <S.Remarks>{props.data?.fetchUseditem?.remarks}</S.Remarks>
      <S.Price>{props.data?.fetchUseditem?.price}</S.Price>
      <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents>
      <S.Button>test</S.Button>
    </S.Wrapper>
  );
}
