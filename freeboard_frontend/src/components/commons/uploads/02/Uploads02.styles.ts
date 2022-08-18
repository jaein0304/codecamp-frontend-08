import styled from "@emotion/styled";

export const UploadButton = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  margin-left: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UploadImageHidden = styled.input`
  display: none;
`;

export const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 40px;
  cursor: pointer;
`;
