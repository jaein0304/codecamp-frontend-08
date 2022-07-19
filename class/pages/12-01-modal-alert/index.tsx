import {  Modal } from "antd";
import React from "react";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({
      content: "게시물 등록에 성공했습니다",
    });
  };

  const onClickFailureButton = () => {
    Modal.error({
      content: "비밀번호가 틀렸습니다",
    });
  };

  return (
    <>
      <button onClick={onClickSuccessButton}>성공</button>
      <button onClick={onClickFailureButton}>실패</button>
    </>
  );
}
