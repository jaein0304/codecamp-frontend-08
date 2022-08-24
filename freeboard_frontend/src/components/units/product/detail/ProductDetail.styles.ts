import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductProfileLike = styled.button`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
export const LikeHeart = styled.img`
  margin-right: 10px;
  cursor: pointer;
`;
export const Label = styled.div``;
export const Name = styled.div`
  width: auto;
`;

export const Remarks = styled.div`
  width: auto;
`;

export const Price = styled.div`
  width: auto;
`;

export const Contents = styled.div`
  width: auto;
`;

export const Button = styled.button`
  width: auto;
  padding: 10px;
  margin-right: 10px;
  border: 3px solid black;
  border-radius: 10px;
  :hover {
    background-color: #ff5722;
    color: white;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Images = styled.img`
  width: 500px;
  height: 500px;
  margin: 30px;
`;

export const LikeButton = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;
