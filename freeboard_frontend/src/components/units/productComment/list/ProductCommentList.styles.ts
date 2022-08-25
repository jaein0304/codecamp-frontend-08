import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentListWrapper = styled.div`
  width: 1200px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  margin-left: 16px;
`;
export const UserName = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
export const Comment = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
`;
export const CreatedAt = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
  margin-top: 20px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
export const Button = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  cursor: pointer;
`;
export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Line = styled.hr`
  width: 1200px;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;
