import { useState, useEffect   } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import './styles/App.css'

function App() {
  const [selectedCountries, setSelectedCountries] = useState([]);
  
  const getRandomCountries = (data, n) => {
    let randomCountries = new Set()
    let dataSize = data.length

    while (randomCountries.size < n) {
      randomCountries.add(data[Math.floor(Math.random() * dataSize)])
    }

    setSelectedCountries([...randomCountries])
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/independent?status=true&fields=name,flags')
      .then(response => response.json())
      .then(data => getRandomCountries(data, 8))
  }, [])

  // Shuffle array using Fisher-Yates (aka Knuth) Shuffle
  const shuffleArray = (array) => {
    let newArr = [...array]
    let currentIndex = newArr.length,  randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
    }

    return newArr;
  }

  const handleCardClick = () => {
    const shuffledCountries = shuffleArray(selectedCountries)
    setSelectedCountries(shuffledCountries)
  }

  return (
    <div id="wrapper">
      <Header></Header>
      <CardContainer data={selectedCountries} clickFn={handleCardClick}></CardContainer>
    </div>
  )
}

export default App
