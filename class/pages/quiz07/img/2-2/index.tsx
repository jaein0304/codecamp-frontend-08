import { useEffect, useRef, useState } from "react";

// https://static.zerochan.net/Pok%C3%A9mon.full.1192359.jpg
export default function ImageLoadPage() {
  const [lazyLoad, setLazyLoad] = useState(false);
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://i.pinimg.com/564x/1d/65/f4/1d65f4d30d4de6e0ecd5c27a0ef0120a.jpg";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickLazyLoad = () => {
    setLazyLoad(true);
  };
  const onClickPreLoad = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
    console.log(imgTag);
  };

  return (
    <>
      <button onClick={onClickLazyLoad}>LazyLoad</button>
      {lazyLoad && (
        <img src="https://static.zerochan.net/Pok%C3%A9mon.full.1192359.jpg" />
      )}
      {lazyLoad && (
        <img src="https://i.pinimg.com/564x/f1/b6/c6/f1b6c6feb75d0e7934101b6d42c01b6c.jpg" />
      )}{" "}
      {lazyLoad && (
        <img src="https://i.pinimg.com/564x/14/c2/86/14c2865304ff16bfdb8c3d74e72bc151.jpg" />
      )}{" "}
      {lazyLoad && (
        <img src="https://i.pinimg.com/564x/7e/e3/a9/7ee3a950150d46926afdbca799d9bc92.jpg" />
      )}{" "}
      {lazyLoad && (
        <img src="https://external-preview.redd.it/eawGkoe9rcqiP-b-SOY-MToo1rDAHesWXp4i-Uj36HE.jpg?auto=webp&s=763a804ac064f14bade3db52926d5e2ad4e55ad2" />
      )}{" "}
      {lazyLoad && (
        <img src="https://airodoctor.com/wp-content/uploads/2020/06/AiroDoctor-Our-Company-SW-11-500x500px.jpg" />
      )}{" "}
      {lazyLoad && (
        <img src="https://i.pinimg.com/564x/f2/88/5a/f2885a46d6cafccc30b67e0bc6647b98.jpg" />
      )}{" "}
      {lazyLoad && (
        <img src="https://i.pinimg.com/564x/b8/65/f7/b865f7e3b4afcce4f70017e58615914f.jpg" />
      )}
      {lazyLoad && (
        <img src="https://i.pinimg.com/originals/4a/bf/b3/4abfb3df89a9ce6418e7794fbb74eb7a.gif" />
      )}{" "}
      {lazyLoad && (
        <img src="https://i.pinimg.com/originals/4d/83/0d/4d830daba6f2f8047cc5aa6c50cf6057.gif" />
      )}
      <div ref={divRef}></div>
      <button
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "30px",
          marginTop: "10px",
        }}
        onClick={onClickPreLoad}
      >
        이미지 보여주기
      </button>
    </>
  );
}
