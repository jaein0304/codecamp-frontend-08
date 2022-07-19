import styled from "@emotion/styled";

export const Wrapper = styled.div`
  color: red;
`;

export const EmailInput = styled.input`
  width: 300px;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const BackWrapper = styled.div`
  width: 640px;
  // height: 1138px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../img/background.png"); // class/public/img/background.png // background-image 아님!
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const PaddingWrapper = styled.div`
  padding: 100px;
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
`;
export const MapImg = styled.div`
  background: url("../img/map.png");
  width: 72px;
  height: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.div`
  color: white;
  font-size: 60px;
  font-weight: 700;
`;

export const MediumPadding = styled.div`
  padding: 80px;
`;

export const WriteWrapper = styled.div`
  border-bottom: 1px solid #ffffff;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #7d7d7d;
`;

export const EmailWrapper = styled.input`
  width: 80%;
  font-size: 24px;
  color: #ffffff;
  border: none;
  background: none;
  outline: none;
`;

export const PasswordWrapper = styled.input`
  width: 80%;
  font-size: 24px;
  color: #ffffff;
  border: none;
  background: none;
  outline: none;
`;

export const WriterWrapper = styled.div`
  padding: 40px;
`;

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 540px;
  height: 76px;
  border-radius: 38px;
  padding: 25px 0;
  background-color: rgba(255, 27, 109, 0.6);
  margin: 20px 0 45px 0;
`;

export const LoginName = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;

export const FindButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 58px;
`;

export const FindCategory = styled.div`
  font-size: 20px;
  color: #ffffff;
`;

export const KakaoButton = styled.div`
  display: flex;
  align-items: column;
  justify-content: space-around;
  width: 540px;
  height: 76px;
  border-radius: 38px;
  border-style: solid;
  border-width: 1px;
  border-color: #fae100;
`;

export const KakaoName = styled.div`
  font-size: 20px;
  color: #fae100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const KakaoIcon = styled.div`
  background: url("../img/kakao.png");
  width: 33px;
  height: 30px;
  margin-right: 300px;
`;
export const UnderPadding = styled.div`
  padding: 50px;
`;
