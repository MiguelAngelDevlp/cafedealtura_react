import "./Bag.css"

import bagImage from '../assets/bag.svg'


const Bag = () => {


    return (
        <div id="bagLogo">
            <img src={bagImage} alt="Bag" className="bag"/>
            <span id="count"></span>
        </div>
    )
}

export default Bag