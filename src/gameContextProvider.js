import React,{useEffect, useState} from "react";


const GameContext = React.createContext();


function GameContextProvider(props){

    const [nextPlayer,setNextPlayer] = useState("X");

    const [gridFull,setGridFull] = useState(false);

    const [winner,setWinner] = useState("");

    const [resetGame,setResetGame] = useState(false);

    function changePlayer(){
        setResetGame(false);
        setNextPlayer(prevPlayer => {

           
            if(prevPlayer == "X"){
                return "O"
            }else{
                return "X"
            }

        })
    }

    function setGridFullFunc(){

        setGridFull(true)

    }

    useEffect(()=>{
        if(gridFull){
        setNextPlayer("Game Draw,Play Again !")}
    },[gridFull])

    function handleWinner(winnerPlayer){
       setWinner(winnerPlayer)

    }

    function handleReset(){
        console.log("set")
        setResetGame(true);
        setNextPlayer("X");
        setWinner("");
       
    }

    return(
    <GameContext.Provider value={{nextPlayer,changePlayer,setGridFullFunc,gridFull, handleWinner,winner,handleReset,resetGame }}>
        {props.children}
    </GameContext.Provider>)
}

export {GameContext,GameContextProvider}