import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Button, Modal } from "antd";

export default function ModalAlertPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompletePostcode = (data: any) => {
    console.log(data);  
    console.log(data.address);
    setIsModalVisible(false);
  };

  return (
    <>
      {" "}
      <Button onClick={showModal}>3번</Button>
      {/* 모달 종료 방식  */}
      {/* 1. 모달 숨기기 */}
      {/* <Modal title="제목이에오" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={onCompletePostcode} />
        <textarea></textarea>
      </Modal> */}
      {/* 2. 모달 삭제 */}
      {isModalVisible && (
        <Modal title="제목이에오" visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={onCompletePostcode} />
        </Modal>
      )}
    </>
  );
}
