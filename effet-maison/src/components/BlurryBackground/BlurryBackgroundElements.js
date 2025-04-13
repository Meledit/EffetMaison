import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const BlurryBackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    filter: blur(100px);
    overflow: hidden;
`;

export const BlurryBackgroundCircle = styled.div`
    width: ${props => props.size}px;
    aspect-ratio: 1;
    border-radius: 1000px;
    background: ${props => props.color};
    position: absolute;
    top: ${props => props.Y}%;
    left: ${props => props.X}%;
    transform: translate(-50%, -50%);
`;