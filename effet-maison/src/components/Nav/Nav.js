import React from 'react'
import { NavContainer, NavAccount, NavAccountPicture, NavCart, NavExtras, NavLink, NavLinkText, NavLinks, NavLogo, NavLinkBar, NavCartNumber, NavCartText } from './NavElements'
import logo from "../../images/logo.png"
import account from "../../images/utilisateur.png"

function Nav( { cart , links, refs } ) {

    const [current, setCurrent] = React.useState(0);

    function handleClick(i) {
        setCurrent(i);
    }

  return (
    <NavContainer>
        <NavLogo to="/">L'Effet Maison</NavLogo>
        <NavLinks>
            <NavLink to="/" onClick={()=> handleClick(1)}>
                <NavLinkText>Home</NavLinkText>
                <NavLinkBar canShow={current == 1} />
            </NavLink>

            <NavLink to="/search" onClick={()=> handleClick(2)}>
                <NavLinkText>Catalog</NavLinkText>
                <NavLinkBar canShow={current == 2} />
            </NavLink>
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
