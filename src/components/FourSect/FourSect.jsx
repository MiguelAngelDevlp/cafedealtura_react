import Acord from '../Acord/Acord,'
import './FourSect.css'
import arrow from '../assets/Vector.png'




const FourSect = () => {


    return (
        <div id="section-question">
            <h3 id="titAcor">Preguntas frecuentes</h3>
            <div id="made-column">
                <Acord
                    title={'¿Cómo hago el pedido?'}
                    text={'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'}
                    src={arrow}
                />

                <Acord
                    title={'¿Por qué los precios son tan bajos?'}
                    text={'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'}
                />

                <Acord
                    title={'¿Es posible enviar café a mi oficina?'}
                    text={'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'}
                />
            </div>
        </div>
    )
} 

export default FourSect