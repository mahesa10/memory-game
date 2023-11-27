import Card from "./Card"
import "./styles/CardContainer.css"

function CardContainer({data, clickFn}) {

  return (
    <div className="card-container">
      {data ? data.map((country, index) => <Card key={index} countryName={country.name.common} flagSrc={country.flags.svg} clickFn={clickFn}></Card>) : 'Loading...'}
    </div>
  )
}

export default CardContainer