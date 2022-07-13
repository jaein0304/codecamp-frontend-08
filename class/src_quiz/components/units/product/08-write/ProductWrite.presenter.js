import * as S from './ProductWrite.styles'

export default function ProductWriteUI(props) {
    return (
      <>
        판매자 : <S.RedInput type="text" onChange={props.onChangeSeller} />
        <br />
        이름 : <input type="text" onChange={props.onChangeName} />
        <br />
        내용 : <input type="text" onChange={props.onChangeDetail} />
        <br />
        가격 : <input type="text" onChange={props.onChangePrice} />
        <br />
        <S.RedButton
          qqq={props.myColor}
          onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.RedButton>
      </>
    );
}

