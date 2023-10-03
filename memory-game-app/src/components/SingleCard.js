import './SingleCard.css';


const SingleCard = ({card, handlechoice, flipped, disabled}) => {

    const handleClick = () => {
        if(!disabled){
            handlechoice(card);
        }
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className='front' src={card.src} alt="front" />
                <img className='cover'
                src="/img/cover.png"
                    alt="cover"
                    onClick={handleClick}
                />
            </div>
        </div>      
    );
}

export default SingleCard;