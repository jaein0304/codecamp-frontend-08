import { Rate } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyStar = styled(Rate)`
  font-size: 50px;
  color: #ffbcff;
`;
const desc = ["1점", "2점", "3점", "4점", "5점"];

export default function StarPage() {
  const [value, setValue] = useState(0);

  // if (value)
  //   alert(value)

  const handleChange = (value: any) => {
    setValue(value);
    alert(value + "점");
  };

  return (
    <>
      <MyStar
        onChange={handleChange}
        // tooltips={desc}
        // onChange={setValue}
        // value={value}
      />
      <br />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </>
  );
}
