import './Products.css'
import { useContext, useEffect, useState } from "react";
import { CartContext } from '../../Context/Context';
import axios from "axios"



const apiURL = 'https://cafe-de-altura-api.vercel.app/api/products'

const Products = () => {

    const [coffees, setCoffees] = useState([])
    const [fetching, setFetching] = useState(true)
    const [items, setItems] = useState([]);
    const {choose, setChoose} = useContext(CartContext)
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        axios
            .get(apiURL)
            .then((response) => {

                const cafeSort = response.data.products.sort((a, b) => {
                    return (a.price - b.price)
                })

                cafeSort.map((coffee) => {
                    if (!coffee.available) {
                        cafeSort.splice(cafeSort.indexOf(coffee), 1)
                        cafeSort.push(coffee)
                    }
                })

                const cafeMain = cafeSort.slice(0, 4)

                setCoffees(cafeMain)
                setFetching(false)
                setItems([])
            })
            .catch(err => console.error(err))
    }, [])





    const addItem = (coffee) => {
        const cafeAlto = {
            name: coffee.brand,
            price: coffee.price,
            _id: coffee._id,
            quantity: 1,
            img: coffee.img_url
        }

        const noDuplicate = cart.some(e => e._id === coffee._id)



        if (noDuplicate) {

            cart.map((product) => {


                if (coffee._id === product._id) {
                    return product.quantity++
                }
            })
        } else if (!coffee.available) {
            return
        } else {
            setCart(prev => [...prev, cafeAlto])
        }
        setChoose(!choose)
    }

    return (
        <div id="news">

            {fetching && <h1>Cargando...</h1>}


            {coffees.map((coffee) => {
                const noAvailable = !coffee.available ? 'noStock' : ''
                return (
                    <div  className={noAvailable} id='box-products' key={coffee._id}>
                        <img src={coffee.img_url} alt={coffee.brand} />
                        <h4>{coffee.brand}</h4>
                        <p>{coffee.price},00€</p>
                        <button onClick={() => addItem(coffee)}> Añadir</button>

                    </div>
                )
            })}



        </div>
    )
}

export default Products