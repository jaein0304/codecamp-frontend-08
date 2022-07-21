import styled from "@emotion/styled";
import { IPaginationProps, ISlideButtonProps } from "./Pagination.types";
export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: 25%;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40%;
`;
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const PageButton = styled.button`
  width: 5%;
  height: 10%;
  margin: 20px;
  margin-top: 5%;
  border-radius: 100px;
  border: 3px solid black;
  text-align: center;
  cursor: pointer;
  color: ${(props: IPaginationProps) =>
    props.currentPage ? "white" : "black"};
  background-color: ${(props: IPaginationProps) =>
    props.currentPage ? "#cbb8ee" : "white"};
`;

export const SlideButton = styled.button`
  margin: 5%;
  cursor: ${(props: ISlideButtonProps) =>
    props.isActive ? "default" : "pointer"};
  border: 3px solid black;
  border-radius: 100px;
  background-color: ${(props: ISlideButtonProps) =>
    props.isActive ? "white" : "pink"};
`;
