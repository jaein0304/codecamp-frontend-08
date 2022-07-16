import styled from "@emotion/styled";
// https://ohou.se/projects/110465/detail?affect_type=ProjectSelfIndex&affect_id=0

export const Wrapper = styled.div`
  color: #424242;
  display: block;
  flex-direction: column;
  font-family: "Noto Sans KR";
  font-size: 15px;
  line-height: 15px;
  margin-top: 40px;
`;

export const IdWrapper = styled.div`
/* background-color: brown; */
`
export const CommentWrapper = styled.div`
  color: #424242;
  display: block;
  flex-direction: column;
  font-family: "Noto Sans KR";
  font-size: 15px;
  line-height: 15px;
  text-align: left;
  width: 1200px;
  margin: 100px;
  /* border: 5px solid red; */
`;

export const ProfileWrapper = styled.div`
  padding-left: 42px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* padding-right: 810px; */
  padding-top: 40px;
  /* background-color: black; */
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  /* background-color: blue; */
`;

export const Writer = styled.div`
  width: 180px;
  height: 52px;
  padding-left: 16px;
  /* background-color: beige; */
`;

export const Contents = styled.div`
  width: 100%;
  /* height: 50px; */
  line-height: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  /* background-color: violet; */
`

export const CreatedAt = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  font-size:15px;
  color: rgb(130,140,148);
  /* background-color: aliceblue; */
`