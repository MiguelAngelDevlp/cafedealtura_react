import axios from "axios";
import { useEffect } from 'react'
import { useState } from 'react'
import Button from "../Button/Button";
import './Products.css'


const apiURL = 'https://cafe-de-altura-api.vercel.app/api/products'




const Products = () => {

    const [coffe, setCoffe] = useState([])
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        axios
            .get(apiURL)
            .then((response) => {
                
                const cafeSort = response.data.products.sort((a, b) => {
                    return (a.price - b.price)
                })

                const cafeMain = cafeSort.slice(0,4)

                setCoffe(cafeMain)
                setFetching(false)
            })
            .catch(err => console.error(err))
    }, [])



    return (
        <div id="news">

        {fetching && <h1>LOADING...</h1>}

        
        {coffe.map((coffe) => {
            return (
                <div id= 'box-products' key={coffe._id}>
                    <img src={coffe.img_url} alt={coffe.brand} />
                    <h4>{coffe.brand}</h4>
                    <p>{coffe.price},00€</p>
                    <Button text={'Añadir'}/>
                    
                </div>
            )
        })}



    </div>
    )
}


export default Products