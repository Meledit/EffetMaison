import React from 'react'
import {
  CartListElem,
  CartListElemPicture,
  CartListElemCont,
  CartListElemTitle,
  CartListElemDesc,
  CartListElemPrice,
  CartRemove,
  CartQuantityCont,
  CartQuantity,
  CartQuantityAdd,
  CartQuantitySub,
  CartRemoveImg
} from './CartListElements';
import json from "../Data/data.json"
import croix from "../../images/croix.png"

const CartList = ({ data, consol, setLst, setCart }) => {

    const img = require(`../../images/${data.picture}`);

    function removeFromCartById(id) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1); // remove only the first matching item
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        setLst(consol(JSON.parse(localStorage.getItem("cart")) || []))
        setCart(cart.length)
    }

    function clearAll(id) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Remove all items with the matching id
        const updatedCart = cart.filter(item => item.id !== id);

        // Save updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        setLst(consol(JSON.parse(localStorage.getItem("cart")) || []))
        setCart(updatedCart.length)
    }

    function addOneToCartById(id) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Find item in the data source
        const itemToAdd = json.find(item => item.id === id);

        // Add the item (just a raw push — no quantity tracking here)
        cart.push(itemToAdd);
        localStorage.setItem("cart", JSON.stringify(cart));

        setLst(consol(JSON.parse(localStorage.getItem("cart")) || []))
        setCart(cart.length)
    }

  return (
    <CartListElem>
        <CartListElemPicture src={img} />
        <CartListElemCont>
            <CartListElemTitle>
                {data["name"]}
            </CartListElemTitle>
            <CartListElemDesc>
                {data["description"]}
            </CartListElemDesc>
            <CartListElemPrice>
                €{(data["price"] * data["quantity"]).toFixed(2)}
            </CartListElemPrice>

            <CartRemove onClick={() => clearAll(data["id"])}>
                <CartRemoveImg src={croix} />
            </CartRemove>
            <CartQuantityCont>
                <CartQuantitySub onClick={() => removeFromCartById(data["id"])}>-</CartQuantitySub>
                <CartQuantity>{data["quantity"]}</CartQuantity>
                <CartQuantityAdd onClick={() => addOneToCartById(data["id"])}>+</CartQuantityAdd>
            </CartQuantityCont>
        </CartListElemCont>
    </CartListElem>
  )
}

export default CartList