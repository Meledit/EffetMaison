import React from 'react'
import { NavContainer, NavAccount, NavAccountPicture, NavCart, NavExtras, NavLink, NavLinkText, NavLinks, NavLogo, NavLinkBar, NavCartNumber, NavCartText } from './NavElements'
import logo from "../../images/logo.png"
import account from "../../images/utilisateur.png"

function Nav( { cart , links, refs } ) {

    const [current, setCurrent] = React.useState(0);

    function handleClick(i) {
        setCurrent(i);
        refs[i]();
    }

  return (
    <NavContainer>
        <NavLogo>L'Effet Maison</NavLogo>
        <NavLinks>
            {links.map((item, index) => (
                <NavLink key={index} onClick={()=> handleClick(index)}>
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
                    {cart}
                </NavCartNumber>
            </NavCart>
            <NavAccount to="/Account">
                <NavAccountPicture src={account} />
            </NavAccount>
        </NavExtras>
    </NavContainer>
  )
}

export default Nav
