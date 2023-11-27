import './styles/GameOver.css'

function GameOver({isWin, handleClick}) {
  let displayText = isWin ? 'You Win!' : 'You Lose!'

  return (
    <div className="game-over">
      <h3>{displayText}</h3>
      <button className="reset-btn" onClick={handleClick}>Play Again</button>
    </div>
  )
}

export default GameOver