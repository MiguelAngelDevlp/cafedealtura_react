import { useContext, useEffect, useState } from "react"
import InfoBox from "../../components/InfoBox/InfoBox"
import { CartContext } from "../../Context/Context"
import './Succes.css'
import iconList from '../../components/assets/check.png'

const Succes = () => {

    const { cart, setCart } = useContext(CartContext)
    const { choose, setChoose } = useContext(CartContext)
    const [carrito, setCarrito] = useState([])
    const [radio, setRadio] = useState('GRATIS')

    const addCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                coffee.quantity--
            }
            if (coffee.quantity === 0) {
                cart.splice(cart.indexOf(coffee), 1)
            }
        })
        setChoose(!choose)
    }

    const radioControl = (price) => {
        setRadio(price.target.value)

    }

    const lessCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                coffee.quantity++
            }
        })
        setChoose(!choose)
    }

    const deleteCoffee = (id) => {
        cart.map((coffee) => {
            if (coffee._id === id) {
                cart.splice(cart.indexOf(coffee), 1)
            }
        })
        setChoose(!choose)
    }

    useEffect(() => {
        const cartBox = cart.map((coffee) => {
            return (
                <div id="ca1" key={coffee._id}>
                    <div id="col">

                        <div id="chil1">
                            <button onClick={() => addCoffee(coffee._id)}>-</button> <p>{coffee.quantity}</p><button onClick={() => lessCoffee(coffee._id)}>+</button>
                        </div>

                        <div id="chil2">
                            <img src={coffee.img} alt={coffee.name} />
                        </div>

                        <div id="chil3">
                            <h5>{coffee.name}</h5>
                            <p>Paquete de café, 250 gr</p>
                        </div>

                    </div>
                    <div id="chil4">
                        <p>{coffee.quantity * coffee.price}€</p>
                    </div>
                </div>
            )
        })
        setCarrito(cartBox)
    }, [choose])

    return (

        <div id="cesta-sect">
            
            <InfoBox
                    src={iconList}
                    title={'El pedido ha sido realizado con éxito'}
                    text={'El pedido #12387 se encuentra en preparación. Lo recibirás dentro de las fechas acordadas en tu envío. Hemos enviado un ticket a tu correo electrónico.'}>

                </InfoBox>
            <h4>Productos</h4>
            {carrito}

           
        </div>
    )
}

export default Succes