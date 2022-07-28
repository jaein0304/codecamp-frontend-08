import axios from "axios";
import { useEffect, useState } from "react";

export default function openApiPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return <img src={dogUrl} />;
}
