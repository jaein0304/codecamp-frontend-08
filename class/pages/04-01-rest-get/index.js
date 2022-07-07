import axios from "axios";
import { useState } from 'react';

export default function RestGetPage() {

  const [title, setTitle] = useState()

  const onClickRestApiAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1"); //조회
    console.log(result);
  }

  const onClickRestApiSync = async() =>{
    const result = await axios.get("https://koreanjson.com/posts/1"); //조회
    console.log(result);
    console.log(result.data.title)
    //document.getElementById("qqq").innerText = result.data.title
    setTitle(result.data.title)
  }

  /*function onClickRestApiAsync() {
    const result = axios.get("https://koreanjson.com/posts/1"); //조회
    console.log(result);
  }

  async function onClickRestApiSync() {
    const result = axios.get("https://koreanjson.com/posts/1"); //조회
    console.log(result);
    console.log(result.data.title)
    //document.getElementById("qqq").innerText = result.data.title
    setTitle(result.data.title)
  } */

  return (
    <>
      <button onClick={onClickRestApiAsync}>REST-API 비동기 요청</button>
      <button onClick={onClickRestApiSync}>REST-API 동기 요청</button>
      {/* <div id="qqq"></div> */} 
      <div>{title}</div>
    </>
  );
}
