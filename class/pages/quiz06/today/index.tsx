import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubWrapper = styled.div`
  width: 20%;
`;

export default function TodayBasketListPage() {
  const [baskets, setBaskets] = useState<IBoard[]>([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(result);
  }, []);

  return (
    <>
      {baskets.map((el) => (
        <Wrapper key={el._id}>
          <SubWrapper>{el._id}</SubWrapper>
          <SubWrapper>{el.writer}</SubWrapper>
          <SubWrapper>{el.title}</SubWrapper>
          <SubWrapper>{el.createdAt}</SubWrapper>
        </Wrapper>
      ))}
    </>
  );
}
