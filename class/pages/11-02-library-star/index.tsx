import { Rate } from 'antd'
import styled from "@emotion/styled";
import { useState } from 'react';

const MyStar = styled(Rate)`
     font-size: 50px;
    color: #ffbcff; 
`

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  console.log(value);

  return <MyStar onChange={setValue} />;
  //https://www.npmjs.com/package/react-player 유튜브는 혼자 해보기 
}