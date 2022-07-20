// import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function AddressPage() {
  // const [address, setAddress] = useState("");

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

    console.log(fullAddress);
    // setAddress(fullAddress);
  };

  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} />
      {/* <div>{address}</div> */}
    </>
  );
}
