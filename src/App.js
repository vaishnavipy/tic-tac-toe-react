
import { useContext, useState } from 'react';
import './App.css';
import Game from "./game";
import {GameContext} from "./gameContextProvider"

function App() {

  const {nextPlayer,winner,handleReset,gameReset} = useContext(GameContext)

  function handleStart(){
    handleReset();
  }


  return (
    <div className="main-container">
      <Game />
      {gameReset ? <p><span>Next Player: </span>{nextPlayer} </p> : winner ? <p style={{color:"red"}}><span>Winner: </span>{winner} </p>  : <p><span>Next Player: </span>{nextPlayer} </p>}
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
}

export default App;
