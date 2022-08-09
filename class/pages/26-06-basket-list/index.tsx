import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  width: 25%;
`;

export default function MapFruitsPage() {
  const [baskets, setBaskets] = useState<IBoard[]>([]);
  /* =============================== */
  // 1. process.browser
  // 2. typeof window !== "undefined"
  // 3. useEffect
  /* =============================== */
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(result);
  }, []);

  return (
    <>
      {baskets.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
    </>
  );
}
