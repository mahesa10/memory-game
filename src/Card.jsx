import './styles/Card.css'

function Card({countryName, flagSrc}) {
  return (
    <div className="card">
      <img className="country-flag" src={flagSrc}></img>
      <p className='country-name'>{countryName}</p>
    </div>
  )
}

export default Card