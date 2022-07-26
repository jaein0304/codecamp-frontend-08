import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      <h1>오픈 API 연습</h1>
      <img src={dogUrl} />
    </div>
  );
}
