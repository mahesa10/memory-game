import './styles/Card.css'

function Card({countryName}) {
  return (
    <div className="card">
      <div className="country-flag"></div>
      <p className='country-name'>{countryName}</p>
    </div>
  )
}

export default Card