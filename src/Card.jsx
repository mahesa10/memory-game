import './styles/Card.css'

function Card({countryName, flagSrc, clickFn}) {
  return (
    <div className="card" onClick={clickFn}>
      <img className="country-flag" src={flagSrc}></img>
      <p className='country-name'>{countryName}</p>
    </div>
  )
}

export default Card