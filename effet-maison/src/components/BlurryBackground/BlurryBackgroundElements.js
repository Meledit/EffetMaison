import styled, { keyframes } from 'styled-components';

const idle = keyframes`
    0% {
        transform:  translate(-50%, -50%) scale(1);
    }
    50% {
        transform:  translate(-20%, -20%) scale(1.25);
    }
    100% {
        transform:  translate(-50%, -50%) scale(1);
    }
`

export const BlurryBackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;
    filter: blur(15rem);
    overflow: hidden;
`;

export const BlurryBackgroundCircle = styled.div`
    width: ${props => props.size}%;
    aspect-ratio: 1;
    border-radius: 1000px;
    background: ${props => props.color};
    position: absolute;
    top: ${props => props.Y}%;
    left: ${props => props.X}%;
    transform: translate(-50%, -50%);
    animation: ${idle} 20s linear infinite;
`;