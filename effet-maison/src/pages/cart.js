import React from 'react'
import CartList from '../components/CartList/CartList'
import "../css/cart.css"
import BlurryBackground from "../components/BlurryBackground/BlurryBackground"
import SearchBar from '../components/SearchBar/SearchBar'
import ruban from "../images/ruban.png"
import remise from "../images/remise.png"

const Cart = ({setCart}) => {

    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        const input = e.target.value;
        setValue(input);
    };  

    function consolidateCartItems(cartItems) {
    const consolidated = {};

    cartItems.forEach(item => {
        if (consolidated[item.id]) {
        consolidated[item.id].quantity += 1;
        } else {
        consolidated[item.id] = { ...item, quantity: 1 };
        }
    });

    return Object.values(consolidated);
    }

    function totalAmount(l) {
        let somme = 0;
        for (let i = 0; i < l.length; i++) {
            somme += parseFloat(l[i].price.toFixed(2)) * l[i].quantity
        }

        if (isMatch) {
            somme -= 20
        }

        if (somme < 0) {
            somme = 0
        }


        return somme
    }

    const [lst, setLst] = React.useState(consolidateCartItems(JSON.parse(localStorage.getItem("cart")) || []));
    const [isMatch, setIsMatch] = React.useState(false)
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    const nbItems = data.length;
    const tot = totalAmount(lst);

    function clearAll() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Remove all items with the matching id
        const updatedCart = [];

        // Save updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        setLst([])
        setCart(updatedCart.length)
    }
    
  return (
    <div className='CartSection'>
        {/* <BlurryBackground /> */}
        
        <h2>Votre panier</h2>
        <div className='CartCont'>
            <div className="CartListCont">
                {lst.map((item, index) => (
                    <CartList setCart={setCart} key={item.id || index} data={item} consol={consolidateCartItems} setLst={setLst} />
                ))}

                {lst.length == 0 && (
                    <div className='CartMessage'>Panier Vide</div>
                )
                }
            </div>

            <div className='CartExtras'>
                <div className='CartExtra'>
                    <h3 className='CartExtraTitle'>
                        Coupons
                    </h3>
                    <SearchBar value={value} handleChange={handleChange} reversed={true} matchValue="MAX500" setIsMatch={setIsMatch} text="Coupons" pic={remise} />
                </div>
                <div className='CartExtra'>
                    <h3 className='CartExtraTitle'>
                        Cadeaux
                    </h3>
                    <div className='CartGift'>
                        <div className='CartGiftTitle'>Achetez-vous pour un être cher ?</div>
                        <div className='CartGiftText'>Ajoutez un message personnalisé à partir €20</div>
                        <a className='CartGiftLink' href=''>Ajoutez un emballage cadeau</a>
                        <div className='CartGiftRect'></div>
                        <img src={ruban} className='CartGiftImage'/>
                    </div>
                </div>
                <div className='CartExtra'>
                    <h3 className='CartExtraTitle'>
                        Détails des prix
                    </h3>
                    <div className='CartPriceDetail'>
                        <h4>{nbItems} article(s)</h4>

                        {lst.map((item, index) => (
                            <div className='CartPriceDetailListElem'>
                                <div>
                                    { item.quantity }x { item.name }
                                </div>
                                <div className='CartPriceDetailListElemSecondary'>
                                    €{ (item.price * item.quantity).toFixed(2) }
                                </div>
                            </div>
                        ))}

                        {isMatch && (
                            <div className='CartPriceDetailListElem'>
                                <div>
                                    Coupons
                                </div>
                                <div className='CartPriceDetailListElemGreen'>
                                    -€20.00
                                </div>
                            </div>
                        )}

                        {lst.length != 0 && (
                            <div className='CartPriceDetailListElem'>
                                <div>
                                    Delivery Charges
                                </div>
                                <div className='CartPriceDetailListElemSecondary'>
                                    Free Delivery
                                </div>
                            </div>
                        )
                        }

                        <div className='CartPriceDetailEnd'>
                            <div>
                                Total Amount
                            </div>
                            <div>
                                €{tot.toFixed(2)}
                            </div>
                        </div>
                    </div>
                    {/* price details Component */}
                </div>
                <button className='CartButton' onClick={() => clearAll()}>
                    Commander &#8614;
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cart