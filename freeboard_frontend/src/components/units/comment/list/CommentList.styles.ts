import styled from "@emotion/styled";
import { Modal, Rate } from "antd";
// https://ohou.se/projects/110465/detail?affect_type=ProjectSelfIndex&affect_id=0
// 오늘의집 UI 댓글쪽 참고

export const Wrapper = styled.div`
  color: #424242;
  display: block; //
  flex-direction: row;
  font-family: "Noto Sans KR";
  font-size: 15px;
  line-height: 15px;
  /* margin-top: 10px; */
`;

export const IdWrapper = styled.div`
  /* background-color: brown; */
`;
export const CommentWrapper = styled.div`
  color: #424242;
  display: flex; //block (x)
  /* flex-direction: row; */
  font-family: "Noto Sans KR";
  font-size: 15px;
  line-height: 15px;
  text-align: left;
  width: 1200px;
  margin: 100px;
  /* border: 5px solid red; */
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 4%;
  height: 100%;
  /* background-color: black; */
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: pink; */
`;

export const Profile = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  /* background-color: blue; */
`;

export const Writer = styled.div`
  width: 100%;
  height: 30px;
  /* background-color: beige; */
`;

export const Contents = styled.div`
  width: 100%;
  /* height: 50px; */
  line-height: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  /* background-color: violet; */
`;

// div x
export const Rating = styled(Rate)``;

export const CreatedAt = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  font-size: 15px;
  color: rgb(130, 140, 148);
  /* background-color: aliceblue; */
`;

export const ButtonWrapper = styled.div`
  width: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  float: right;
  /* background-color: bisque; */
`;

export const EditButton = styled.img`
  width: 25px;
  height: 25px;
  float: right;
  cursor: pointer;
`;

export const DeleteButton = styled.img`
  width: 25px;
  height: 25px;
  float: right;
  cursor: pointer;
`;

export const PasswordModal = styled(Modal)`
  width: 100%;
  margin-top: 10px;
`;

export const PasswordInput = styled.input``;
