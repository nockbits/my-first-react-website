import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// data for the card images...this is done outside the component since they do not change like states
const cardImages = [
  {src: '/img/helmet-1.png', matched: false},
  {src: '/img/potion-1.png', matched: false},
  {src: '/img/ring-1.png', matched: false},
  {src: '/img/scroll-1.png', matched: false},
  {src: '/img/shield-1.png', matched: false},
  {src: '/img/sword-1.png', matched: false}
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle the cards
  const shuffleCards = () => {
    const cards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(cards);
    setTurns(0);
  }

  // handle the choices
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // compare the choices to see if they match
  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisabled(true);
      if(choiceOne.src === choiceTwo.src){
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            }
            else{
              return card
            }
          })
        })
        reset();
      }
      else{
        setTimeout(() => {
          reset();
        }, 1000);
      }
    }

  }, [choiceOne, choiceTwo])

   // reset the choices and increase turns
   const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  }

  useEffect(() => {
    shuffleCards();
  }, [])

  return (
    <div className="App">
      <h1>magic match</h1>
      <button onClick={shuffleCards}>New game</button>
      <p>Turns: { turns }</p>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
           key={card.id}
           card={card}
           handlechoice={handleChoice}
           flipped = {card === choiceOne || card === choiceTwo || card.matched }
           disabled = {disabled}
          />
        ))}
      </div>
    </div>

  );
}

export default App;


