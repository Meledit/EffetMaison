import styled, { keyframes } from "styled-components";


const loop = keyframes`
    0% {
        transform: translate(0%, 0%);
    }
    100% {
        transform:  translate(-100%, 0%);
    }
`

export const ScrollingBandCont = styled.div`
    width: 100%;
    height: 25vh;
    background: #000;
    align-items: center;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

export const ScrollingBandSubSection = styled.div`
    align-items: center;
    overflow: hidden;
    display: flex;
    gap: 70px;
    padding: 0px 70px 0px 0px;
    flex: 0 0 auto;
    animation: ${loop} linear 10s infinite;
`;

export const ScrollingBandContent = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 70px;
    overflow: hidden;
    position: absolute;
    border: 1px solid blue;
    top: 50%;
    transform: translateY(-50%);
`;

export const ScrollingBandText = styled.div`
    font-size: 4rem;
    color: #fff;
    white-space: nowrap;
    font-family: "Petit Formal Script", cursive;
`;

export const ScrollingBandImg = styled.img`
    height: 50px;
    aspect-ratio: 1;
    object-fit: cover;
`;