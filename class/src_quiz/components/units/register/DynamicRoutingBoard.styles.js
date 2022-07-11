import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

`

export const BlackInput = styled.input`
    border-radius: 10px solid #ffb6c1;
    margin-bottom: 10px;
`

export const LavenderButton = styled.button` 
    width: 100px;
    height: 100px;
    border-radius: 20px;
    border-radius: 20px solid #fff0f5;;
    //background-color: #e6e6fa;
    background-color: ${(props) => props.test === true ? "red" : "blue"};
    
`

export const Test = styled.button`
    /* font-size: ${(props) => props.fontsize} */
    background-color: ${(props) => props.test === true ? "red" : "blue"};
`

export const RegisterButton = styled.button`
    background-color: ${(props) => props.Register === true ? "yellow" : "black" };
`

// export default function QQQ() {
// }