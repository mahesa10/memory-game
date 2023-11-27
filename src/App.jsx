import { useState, useEffect   } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import './styles/App.css'

function App() {
  const [countryData, setCountryData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  
  const getRandomCountries = (data, n) => {
    let randomCountries = new Set()
    let dataSize = data.length

    while (randomCountries.size < n) {
      randomCountries.add(data[Math.floor(Math.random() * dataSize)])
    }

    setCountryData([...randomCountries])
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

  const handleShuffle = () => {
    const shuffledCountries = shuffleArray(countryData)
    setCountryData(shuffledCountries)
  }

  const handleScore = (countryName) => {
    if (!selectedCountries.includes(countryName)) {
      setSelectedCountries([...selectedCountries, countryName])
      setScore(score + 1)
      if (score === bestScore) setBestScore(bestScore + 1)
    } else {
      setScore(0)
      setSelectedCountries([])
    }
  }

  return (
    <div id="wrapper">
      <Header score={score} bestScore={bestScore}></Header>
      <CardContainer data={countryData} handleShuffle={handleShuffle} handleScore={handleScore}></CardContainer>
    </div>
  )
}

export default App
