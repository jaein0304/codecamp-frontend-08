import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  border: 3px solid gray;
  height: 800px;
  margin-top: 50px;
`;

export const SideWrapper = styled.div`
  width: 25%;
  height: 700px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 50px;
`;

export const MainWrapper = styled.div`
  width: 75%;
  height: 700px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 50px;
`;

export const Line = styled.hr`
  height: 800px;
  border: 1px solid #bdbdbd;
`;

export const MyPage = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

export const UserProfile = styled.img`
  width: 80px;
  height: 80px;
`;

export const Point = styled.h2`
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 20px;
`;
export const SideMenu = styled.h2`
  font-weight: 400;
  margin-top: 50px;
  cursor: pointer;
`;

export const SideArrow = styled(ArrowLeftOutlined)`
  /* justify-content: left; */
  cursor: pointer;
  margin-top: 100px;
  margin-right: 250px;
`;
export const SelectList = styled.div`
  width: 400px;
  margin-left: 5%;
  padding: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  /* :hover  {
    color: orange; // <Thing> when hovered
  } */
`;

export const List = styled.div`
  cursor: pointer;
`;
