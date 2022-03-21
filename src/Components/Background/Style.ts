import styled from "styled-components";

export const OutsideWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E9ECEF;
    display: flex;
    position: absolute;
    z-index: -1;
`

export const InsideWrapper = styled.div`
    width: 600px;
    height: 80vh;
    background-color: white;
    border-radius: 50px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`