import { useEffect, useState } from "react";
import "../styles/cardGrid.css";

// Fisher Yates Shuffle Algorithm
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const CardGrid = ({ onCardClick }) => {
  const [cards, setCards] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12",
      );
      const data = await response.json();
      const formattedData = data.results.map((item, index) => ({
        id: index + 1,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
      }));
      setCards(shuffleArray(formattedData));
    }
    fetchData();
  }, []);

  const handleLocalClick = (id) => {
    setCards(shuffleArray(cards)); // Shuffle every time a card is clicked
    onCardClick(id);
  };

  return (
    <main className="grid">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleLocalClick(card.id)}
        >
          <img src={card.image} alt={card.name} />
          <p>{card.name}</p>
        </div>
      ))}
    </main>
  );
};

export default CardGrid;
