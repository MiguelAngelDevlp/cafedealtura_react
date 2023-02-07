

import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/Context"

import './PriceBox.css'


const PriceBox = ({ tipo }) => {

    const { cart, setCart } = useContext(CartContext)
    const { shipping, setShipping } = useContext(CartContext)
    const { choose, setChoose } = useContext(CartContext)
    const [sendPrice, setSendPrice] = useState('GRATIS')
    const [subtotalPrice, setSubtotalPrice] = useState(0)
    const [IVAPrice, setIVAPrice] = useState(0)



    const totalShop = () => {
        let price = 0
        let send = 0

        cart.map(coffe => {
            price += (coffe.price * coffe.quantity)
            send += (coffe.price * coffe.quantity)
        })


        let iva = send - (send / 1.21)

        if (tipo !== 'GRATIS') {
            send += 9
            setShipping(send)
        } else {
            setShipping(price)
        }


        return (
            <div id="box-precio-total">
                <h5>Total del carrito</h5>
                <div id="caja-subtotal">

                    <div className="caja-envio">
                        <p>SUBTOTAL </p>
                        <span>{price.toFixed(2)} €</span>
                    </div>

                    <div className="caja-envio">
                        <p>ENVIO </p>
                        <span>{tipo} </span>
                    </div>

                    <div  id='total-id'>
                        <h6>TOTAL </h6>
                        <span>{send.toFixed(2)} €</span>
                    </div>

                    <p className="iva">Incluye {iva.toFixed(2)}€ de IVA</p>
                </div>

                <div className="div-grande">
                    <button className="btn"><Link className="btn" to={'/Succes'}>Ir al checkout</Link></button>
                    <Link to={'/Shop'}>Seguir comprando</Link>
                </div>

            </div>)

    }








    return (
        <div>
            {totalShop()}


        </div>
    )
}


export default PriceBox