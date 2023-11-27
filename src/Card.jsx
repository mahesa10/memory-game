import './styles/Card.css'

function Card({countryName, flagSrc, handleShuffle, handleScore}) {
  return (
    <div className="card"
    onClick={() => {
      handleShuffle()
      handleScore(countryName)
    }}>
      <img className="country-flag" src={flagSrc}></img>
      <p className='country-name'>{countryName}</p>
    </div>
  )
}

export default Card