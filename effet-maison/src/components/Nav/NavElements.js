import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    border: 1px solid red;

    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 75px;
    background: #fff;
    border-radius: 10px;
    margin-top: 5vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 45px 0px 45px;
`;

export const NavLogo = styled.img`
  height: 65%;
  aspect-ratio : 1;
  object-fit: cover;
  border-radius: 1000px;
`;

export const NavLinks = styled.div`
  display: flex;
  height: 60%;
  gap: 15px;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #000;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const NavLinkText = styled.div`
  height: 95%;
  align-content: center;
`;

export const NavLinkBar = styled.div`
  width: 100%;
  height: 5%;
  background: #FF0000;
  transition: 0.5s;
  transform-origin: center;
  transform: ${props => props.canShow ? "scaleX(100%)" : "scaleX(0%)"};
`;

export const NavExtras = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 100%;
`;

export const NavCart = styled(Link)`
  border: 1px solid #000;
  height: 50%;
  border-radius: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  text-decoration: none;
  gap: 10px;
`;

export const NavCartNumber = styled.div`
  height: 100%;
  aspect-ratio: 1;
  background: #000;
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-style: italic;
  font-size: 1.25rem;
`;

export const NavCartText = styled.div`
    margin-left: 15px;
    font-style: italic;
`;

export const NavAccount = styled(Link)`
  height: 50%;
  border-radius: 1000px;
`;

export const NavAccountPicture = styled.img`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 1000px;
  object-fit: cover;
`;

