import styled from '@emotion/styled'
import { IRedButtonProps } from './BoardWrite.types'

export const RedInput = styled.input`
    border-color: red;
`

export const RedButton = styled.button`
    //const myColor = "yellow"
    border-radius: 10px;
    background-color: ${(props: IRedButtonProps)=>props.qqq ? "yellow" : "default"}; 
`