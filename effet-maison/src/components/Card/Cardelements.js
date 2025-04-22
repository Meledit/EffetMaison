import styled from "styled-components"

export const CardCont = styled.div`
    width: 400px;
    height: 500px;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    color: #fff;
    transition: 0.5s;
    box-shadow: ${props => props.hovered ? "0px 5px 10px #BBB" : "0px 5px 5px #BBB"};
    transform: ${props => props.hovered ? "scale(1.05)" : "scale(1)"};
`;

export const CardIma = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.hovered ? "120%" : "100%"};
    height: ${props => props.hovered ? "120%" : "100%"};
    object-fit: cover;
    z-index: -5;
    transition: 0.5s;
`;

export const CardBlur = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: ${props => props.hovered ? "blur(4px)" : "blur(1px)"};
    background-color: #00000033;
    z-index: -4;
    transition: 0.5s;
`;

export const CardTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    width: 100%;
    left: 40px;
    bottom: ${props => props.hovered ? "10%" : "-33%"};
    transition: 0.5s;
`;

export const CardText = styled.div`
    transition: 0.5s;
    width: 80%;
`;

export const CardButtons = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
`;

export const CardCart = styled.div`
    width: 55%;
    background-color: #000;
    height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    cursor: pointer;
`;

export const CardSave = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 1000px;
    cursor: pointer;
`;

export const CardSaveImg = styled.img`
    width: 40%;
    aspect-ratio: 1;
`;