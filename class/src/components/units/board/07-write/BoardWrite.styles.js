import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color: red;
`

export const RedButton = styled.button`
    //const myColor = "yellow"
    border-radius: 10px;
    background-color: ${(props)=>props.qqq ? "yellow" : "default"}; 
`