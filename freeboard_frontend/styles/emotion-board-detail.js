import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 1200px;
  height: 1602px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  //align-items: center;
  padding-left: 101px;
  border: none;
  box-shadow: 0px 0px 10px gray;
`

// 주소 말풍선
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding: 10px 10px 10px 0px; //l&t , r&b
  margin-left: 600px;
  //border: 1px solid red;
`
export const AddressBox = styled.div`
  width: 376px;
  height: 64px;
  border: 1px solid #ffd600;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const AddressBoxPolygon = styled.div`
  width: 12px;
  height: 8px;
  background-color: #c4c4c4;
  border-bottom: 12px transparent;
  border-top: 12px solid white;
  border-left: 12px solid transparent;
  border-right: 364px solid white;
  transform: rotate(-180deg); //삼각형 돌리기
`
export const AddressContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  //float: right;
  margin-top: 10px;
  margin-right: 16px;
`

// 타이틀 부분
export const TopWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  //border: 1px solid black;
  //padding-left: 102px;
  //padding-right: 102px;
`

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //margin-left:10px;
  //border:1px solid black;
`
export const ProfileName = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: "Noto Sanz CJK KR";
`

export const ProfileDetail = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
  font-style: normal;
  font-family: "Noto Sanz CJK KR";
`

export const TopIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 750px;
`

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  font-family: "Noto Sanz CJK KR";
`

export const MainImage = styled.div`
  //width:996px;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const Contents = styled.div`
  width: 996px;
  font-size: 16px;
  font-weight: 400;
  font-family: "Noto Sanz CJK KR";
`

export const Youtube = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid red;
  margin-left: 250px;
  margin-top: 120px;
  margin-bottom: 150px;
`

export const ThumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 400px;
  margin-bottom: 80px;
  //justify-content: space-around;
`

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 43px;
`

export const ThumbUpText = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  font-family: "Noto Sanz CJK KR";
  color: #ffd600;
`

export const ThumbDownText = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  font-family: "Noto Sanz CJK KR";
  color: #828282;
`

///
export const UnderWrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  //align-items: center;
  padding-left: 101px;
  padding-top: 101px;
  border: none;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Button = styled.div`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  background-color: white;
  font-size: 16px;
  font-weight: 500px;
  font-family: "Noto Sanz CJK KR";
  // text-align: center;
  // 버튼 안 글자 가운데 정렬
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonPadding = styled.div`
  padding-left: 24px;
  padding-bottom: 87px;
`

export const Division = styled.div`
  // width:1200px;
  padding-left: 101px;
  // border:0px;
  border-top: 5px solid #bdbdbd;
`
