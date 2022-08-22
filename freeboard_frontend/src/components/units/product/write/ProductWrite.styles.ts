import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const Name = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Remark = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Price = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

// export const Contents = styled.input`
//   width: 996px;
//   height: 480px;
//   padding-left: 16px;
//   padding: 14px;
//   border: 1px solid #bdbdbd;
// `;

export const InputWrapper = styled.div`
  /* width: 100%; */
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;
/* export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`; */

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: 3px solid black;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 20px;
  cursor: pointer;
  background-color: ${(props: ISubmitButtonProps) =>
    props.submitButton ? " rgb(218, 64, 13)" : "default"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
export const Contents = styled(ReactQuill)`
  width: auto;
  height: auto;
  margin-bottom: 40px;
  border: 3px solid black;
`;

export const GPSWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
`;
export const GPS = styled.div`
  width: 500px;
  height: 400px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 50px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`;

export const AddressSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  /* background-color: #ffffff; */
  border: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #bdbdbd;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;
// 버튼으로 하면 안된다 폼때문인가
export const AddressSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  gap: 10px;
  color: white;
  background-color: black;
  width: 100%;
  height: 51px;
`;

export const Address = styled.input`
  width: 100%;
  height: 56px;
  background-color: #e9e9e9;
  margin-top: 27px;
  margin-bottom: 24px;
  border: none;
`;
