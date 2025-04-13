import React from 'react'
import { NavContainer, NavAccount, NavAccountPicture, NavCart, NavExtras, NavLink, NavLinkText, NavLinks, NavLogo, NavLinkBar, NavCartNumber, NavCartText } from './NavElements'
import logo from "../../images/logo.png"

function Nav( { links } ) {

    const [current, setCurrent] = React.useState(0);

  return (
    <NavContainer>
        <NavLogo src={logo} />
        <NavLinks>
            {links.map((item, index) => (
                <NavLink to={"#" + item} key={index} onClick={()=> setCurrent(index)}>
                    <NavLinkText>{item}</NavLinkText>
                    <NavLinkBar canShow={current == index} />
                </NavLink>
            ))}
        </NavLinks>

        <NavExtras> 
            <NavCart to="/Cart">
                <NavCartText>
                    Cart
                </NavCartText>
                <NavCartNumber>
                    0
                </NavCartNumber>
            </NavCart>
            <NavAccount to="/Account">
                <NavAccountPicture src={logo} />
            </NavAccount>
        </NavExtras>
    </NavContainer>
  )
}

export default Nav
