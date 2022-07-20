import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Button, Modal } from "antd";

export default function ModalAddressPage() {
  const [address, setAddress] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
    console.log(address);
    // if (address) {
    //   setIsModalVisible(false);
    //   handleComplete(true);
    // }
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    onToggleModal(); // 확인 클릭 시 알림창 꺼짐
    // console.log(fullAddress);
    setAddress(fullAddress);
  };

  //
  return (
    <>
      <Button onClick={onToggleModal}>모달열기</Button>
      <div>{address}</div>

      <Modal
        visible={isModalVisible}
        onOk={onToggleModal}
        onCancel={onToggleModal}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
        {/* <div>{address}</div> */}
      </Modal>
    </>
  );
}
