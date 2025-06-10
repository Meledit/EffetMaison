import styled from "styled-components"

export const SearchBarCont = styled.div`
    width: 100%;
    height: 50px;
    border: 2px solid ${props => props.isFocused ? "rgb(236, 202, 135)" : "#ddd"};
    display: flex;
    border-radius: 5px;
    padding: 0px 20px 0px 5px;
    gap: 10px;
    transition: 0.25s all;
`;

export const SearchBarContent = styled.div`
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const SearchBarImg = styled.img`
    height: 80%;
    aspect-ratio: 1;
`;

export const SearchBartext = styled.div`
    font-weight: bold;
    font-size: 0.75rem;
`;

export const SearchBarInput = styled.input`
    width: 100%;
    border: none;
    text-align: ${(props) => (props.reversed ? 'end' : 'start')};
    font-size: 1.25rem;
    color: ${(props) => (props.matchValue == '' ? '#000' : (props.isMatch ? '#18dc6b' : 'red'))};

    &:focus {
        border: none;
        outline: none;
    }
`;