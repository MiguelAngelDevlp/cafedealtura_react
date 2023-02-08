import { useContext, useEffect, useState } from "react"
import Checkout from "../../components/Checkout/Checkout"
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod"
import PriceBox from "../../components/PriceBox/PriceBox"
import { CartContext } from "../../Context/Context"


const Pasarela = () => {

    const [nueve, setNueve] = useState('')
    const {cart, setCart} = useContext(CartContext)
    const { shipping, setShipping } = useContext(CartContext)


    useEffect(() => {
        let price = 0
        cart.map((coffee) =>{
            price += (coffee.price * coffee.quantity)
        })
        if (price === shipping) {
            setNueve('GRATIS')
        } else {
            setNueve('9,00 €')
        }


    }, [])


    return (
        <div>
            <PaymentMethod/>
            <Checkout/>
            <PriceBox tipo={nueve} text='Pagar y realizar pedido' page={'pasarela'}/>
        </div>
    )
}

export default Pasarela