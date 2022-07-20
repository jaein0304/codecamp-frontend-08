import { Modal } from "antd";
import React, { useState } from "react";

export default function ModalAlertPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClickAlertButton = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <button onClick={onClickAlertButton}>모달열기</button>
      <Modal
        title="게시물 등록"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>게시물이 등록되었습니다.</p>
      </Modal>
    </>
  );
}
