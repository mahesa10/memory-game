import './styles/Header.css'

function Header() {
  return (
    <div className="header">
      <div className="title-container">
        <h1>Country Flag Memory Game</h1>
        <h2>Don't click the same flag twice!</h2>
      </div>
      <div className="score-container">
        <p>Score: 0</p>
        <p>Best Score: 0</p>
      </div>
    </div>
  )
}

export default Header