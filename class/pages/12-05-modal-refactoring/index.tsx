import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Button, Modal } from "antd";

export default function ModalAlertPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompletePostcode = (data: any) => {
    console.log(data);
    console.log(data.address);
    onToggleModal();
  };

  return (
    <>
      <Button onClick={onToggleModal}>3번 리팩토링</Button>
      {isModalVisible && (
        <Modal
          title="제목이에오"
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={onCompletePostcode} />
        </Modal>
      )}
    </>
  );
}
