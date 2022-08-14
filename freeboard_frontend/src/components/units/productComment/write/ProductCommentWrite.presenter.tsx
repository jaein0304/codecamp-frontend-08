import * as S from "./ProductCommentWrite.styles";
import { IProductCommentWriteUIProps } from "./ProductCommentWrite.types";
export default function ProductCommentWriteUI(
  props: IProductCommentWriteUIProps
) {
  return (
    <>
      <S.Wrapper>
        <S.Label>댓글</S.Label>
        <S.ContentsWrapper>
          <S.Contents
            placeholder="해당 상품 자체와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다."
            onChange={props.onChangeContents}
          />
        </S.ContentsWrapper>
        <S.ButtonWrapper>
          <S.Button onClick={props.onClickRegisterComment}>등록하기</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
