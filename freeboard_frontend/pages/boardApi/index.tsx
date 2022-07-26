import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 20px;
`;

export default function openApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  // useQuery()가 좋은 방법
  // graphQL -> Apollo-client
  // rest-api -> react-query

  // componentDidMount
  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return (
    <Wrapper>
      <img src={dogUrl} />
    </Wrapper>
  );
}
