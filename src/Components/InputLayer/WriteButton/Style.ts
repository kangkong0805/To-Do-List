import { MdAdd } from "react-icons/md";
import styled, {css, keyframes} from "styled-components";

export const RotateButton = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
`
export const ButtonWrapper = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: rgb(56 217 169);
    position: absolute;
    bottom: 20px;
    right: 0;
    margin: 0 auto;
    
    
`

export const PlusWrapper = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    
`