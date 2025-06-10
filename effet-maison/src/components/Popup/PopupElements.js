import styled from 'styled-components';

export const PopupCont = styled.div`
    color: #000;
    padding: 20px 30px;
    background: rgb(236, 202, 135);
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    bottom: ${props => props.isActive ? "20px" : "-50px"};
    right: 20px;
    z-index: 999999;
    transition: 0.5s;
    opacity: ${props => props.isActive ? "1" : "0"};
`;