import { useState, useEffect } from "react"
import Card from "./Card"
import "./styles/CardContainer.css"

function CardContainer() {
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

  return (
    <div className="card-container">
      {selectedCountries ? selectedCountries.map((country, index) => <Card key={index} countryName={country.name.common} flagSrc={country.flags.svg}></Card>) : 'Loading...'}
    </div>
  )
}

export default CardContainer