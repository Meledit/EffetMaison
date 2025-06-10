import styled from "styled-components"

export const CardCont = styled.div`
    width: 350px;
    height: 450px;
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
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${props => props.hovered ? "40%" : "10%"};
    transition: 0.5s;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    width: 80%;
    left: 50%;
    transform: ${props => props.hovered ? "translate(-50%, 0%)" : "translate(-50%, 100%)"};
    bottom: ${props => props.hovered ? "7%" : "0"};
    transition: 0.5s;
`;

export const CardText = styled.div`
    transition: 0.5s;
    width: 100%;
    font-size: 1rem;
`;

export const CardButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const CardCart = styled.div`
    width: 55%;
    background-color: #000;
    height: 40px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background: rgb(236, 202, 135);
        color: #000;
        transform: scale(1.05);
    }
`;

export const CardSave = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    height: 40px;
    aspect-ratio: 1;
    border-radius: 1000px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background: rgb(236, 202, 135);
        color: #000;
        transform: scale(1.05);
    }
`;

export const CardSaveImg = styled.img`
    width: 40%;
    aspect-ratio: 1;
    transition: 0.5s;
    filter: ${props => props.saveHovered ? "invert(1)" : "invert(0)"};
`;