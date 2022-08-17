import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function CallbackFriendsPage() {
  const [result, setResult] = useState([]);
  const onClickCallback = () => {
    setResult([]);
    const a = new XMLHttpRequest();
    a.open("get", "http://numbersapi.com/random?min=1&max=200");
    a.send();
    a.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];
      const b = new XMLHttpRequest();
      b.open("get", `https://koreanjson.com/posts/${num}`);
      b.send();
      b.addEventListener("load", (res: any) => {
        const a = JSON.parse(res.target.response);
        const userId = a.UserId;
        const c = new XMLHttpRequest();
        c.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        c.send();
        c.addEventListener("load", (res: any) => {
          const a = JSON.parse(res.target.response);
          setResult(a);
          console.log(a);
        });
      });
    });
  };

  const onClickPromise = () => {
    setResult([]);
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log(res);
        setResult(res.data);
      });
  };

  const onClickAsyncAwait = async () => {
    setResult([]);
    const a = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = a.data.split(" ")[0];
    const b = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = b.data.UserId;
    const c = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    setResult(c.data);
  };

  return (
    <>
      <div>
        결과:<button onClick={onClickCallback}>Callback</button>
      </div>
      <div>
        결과:<button onClick={onClickPromise}>Promise</button>
      </div>
      <div>
        결과:<button onClick={onClickAsyncAwait}>Async/Await</button>
      </div>
      {result.map((el: any) => (
        <div key={uuidv4()}>
          <div>{el.title}</div>
          <div>{el.content}</div>
        </div>
      ))}
    </>
  );
}
