import Button from "../Button/Button";
import './OneSection.css'

const OneSection = ({subtitle, title, imagen, parr}) => {

    return (
        <div className="section">
            <div className="childSection">
                <h4>{subtitle}</h4>
                <h1>{title}</h1>
                <p>{parr}</p>
                <Button text={'Descubrir origenes'}/>
                <Button text={'Comprar café'}/>
            </div>

            <div className="section-two">
                <img src={imagen} alt='Hands taking fruits'/>
            </div>
        </div>
    )
}

export default OneSection