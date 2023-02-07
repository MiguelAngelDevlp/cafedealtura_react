import './OneSection.css'


const OneSection = ({ subtitle, title, src, parr, bu, bu2 }) => {

    return (
        <div className="section">
            <div className="childSection">
                <h4>{subtitle}</h4>
                <h1>{title}</h1>
                <p>{parr}</p>
                
                <div>
                    {bu}
                    {bu2}
                </div>
            </div>

            <div className="section-two">
                <img  className='tamaño' src={src} alt='Hands taking fruits' />
            </div>
        </div>
    )
}

export default OneSection