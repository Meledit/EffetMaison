import React from 'react'
import { CardSaveImg, CardContent, CardButtons, CardBlur,  CardCart, CardCont, CardIma, CardSave, CardText, CardTitle } from './Cardelements'
import bg from '../../images/card.jpg'
import save from "../../images/save.png"
import data from "../Data/data.json"

function Card({ add, setPopupText, setIsActive, id }) {

  const [hovered, setHovered] = React.useState(false)
  const [saveHovered, setSaveHovered] = React.useState(false)

  const img = require(`../../images/${data[id].picture}`);

  function additem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new item
    cart.push(data[id]);

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    add()
  }

  function handleMouseEnter() {
    setHovered(true)
  }

  function handleMouseLeave() {
    setHovered(false)
  }

  function handleSaveEnter() {
    setSaveHovered(true)
  }

  function handleSaveLeave() {
    setSaveHovered(false)
  }

  function handleCartClick() {
    setPopupText("Ajouté au panier");
    setIsActive(true);
    additem(id)
  }

  function handleSaveClick() {
    setPopupText("Article sauvegardé");
    setIsActive(true);
  }

  return (
    <CardCont hovered={hovered} onMouseLeave={() => handleMouseLeave()} onMouseEnter={() => handleMouseEnter()}>
      <CardBlur hovered={hovered} />
      <CardIma src={img} hovered={hovered} />

      <CardTitle hovered={hovered}>{data[id]["name"]}  €{data[id]["price"]}</CardTitle>
      <CardContent hovered={hovered}>
        <CardText>
          {data[id]["description"]}
        </CardText>
        <CardButtons>
          <CardCart onClick={() => handleCartClick()}>Add to cart</CardCart>
          <CardSave saveHovered={saveHovered} onMouseLeave={() => handleSaveLeave()} onMouseEnter={() => handleSaveEnter()} onClick={() => handleSaveClick()} >
            <CardSaveImg saveHovered={saveHovered} src={save} />
          </CardSave>
        </CardButtons>
      </CardContent>
    </CardCont>
  )
}

export default Card