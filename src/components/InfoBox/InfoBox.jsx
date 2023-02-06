import './InfoBox.css'



const InfoBox = ({ src, title, text }) => {


    return (
        <div className='boxCentral'>
            <div className='picMain'>
                <img src={src} alt="List Icon" />
            </div>

            <h4>{title}</h4>
            <p>{text}</p>

        </div>
    )
}

export default InfoBox