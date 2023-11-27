import Card from "./Card"
import "./styles/CardContainer.css"

function CardContainer({data, handleShuffle, handleScore}) {

  return (
    <div className="card-container">
      {data ? data.map((country, index) => <Card key={index} countryName={country.name.common} flagSrc={country.flags.svg} handleShuffle={handleShuffle} handleScore={handleScore}></Card>) : 'Loading...'}
    </div>
  )
}

export default CardContainer