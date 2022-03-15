import styled from "styled-components";

export const OutsideWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #E9ECEF;
    display: flex;
    position: relative;
`

export const InsideWrapper = styled.div`
    width: 35vw;
    min-width: 600px;
    height: 80vh;
    background-color: white;
    border-radius: 50px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`