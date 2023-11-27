import './Header.css'

function Header() {
  return (
    <div className="header">
      <h1>Country Flag Memory Game</h1>
      <div className="score-container">
        <p>Score: 99</p>
        <p>Best Score: 100</p>
      </div>
    </div>
  )
}

export default Header