import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;
export const LinkIcon = styled.img``;
export const LocationIcon = styled.img``;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;
export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const GoodWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* justify-content: space-around; */
  margin-top: 15%;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Like = styled.img`
  width: 40px;
  margin-right: 100px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  width: 40px;
  color: yellow;
`;

export const DisLike = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const DisLikeCount = styled.div`
  width: 40px;
  color: gray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 996px;
  height: 480px;
  margin-bottom: 30px;
`;
