import React from 'react'
import { CardSaveImg, CardContent, CardButtons, CardBlur,  CardCart, CardCont, CardIma, CardSave, CardText, CardTitle } from './Cardelements'
import bg from '../../images/card.jpg'
import save from "../../images/save.png"

function Card({ setCart }) {

  const [hovered, setHovered] = React.useState(false)

  function handleMouseEnter() {
    setHovered(true)
  }

  function handleMouseLeave() {
    setHovered(false)
  }

  return (
    <CardCont hovered={hovered} onMouseLeave={() => handleMouseLeave()} onMouseEnter={() => handleMouseEnter()}>
      <CardBlur hovered={hovered} />
      <CardIma src={bg} hovered={hovered} />

      <CardContent hovered={hovered}>
        <CardTitle hovered={hovered}>Product  €XXX</CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardText>
        <CardButtons>
          <CardCart onClick={() => setCart()}>Add to cart</CardCart>
          <CardSave>
            <CardSaveImg src={save} />
          </CardSave>
        </CardButtons>
      </CardContent>
    </CardCont>
  )
}

export default Card