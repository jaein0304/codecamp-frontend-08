import { Button, Modal } from "antd";
import React, { useState } from "react";

export default function ModalAlertPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePassword = (event: any) => {
    setPassword(event?.target.value);
  };

  return (
    <>
      {/* type="primary" -> 파란색 */}
      <Button onClick={showModal}>2번</Button>
      <Modal
        title="제목이에오"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
}
