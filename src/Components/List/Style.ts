import styled from "styled-components";
import { MdDelete, MdDone } from "react-icons/md";

export const ListWrapper = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid black;
    position: relative;
    display: flex;
    align-items: center;
`
export const CheckWrapper = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #38D9A9;
    color: #38D9A9;
    border-radius: 50px;
    position: relative;
    left: 20px;
    display: inline-block;
`

export const ListText = styled.div`
    position: relative;
    left: 50px;
    display:inline-block;
`

export const Done = styled(MdDone)`
    width: 30px; 
    height: 30px; 
    margin: 5px;
`

export const Delete = styled(MdDelete)`
    position: absolute;
    right: 20px;
    width: 20px;
    height: 20px;

    &:hover{
        color: red;
    }
`