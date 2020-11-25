import React, { useContext, useEffect, useState } from "react";
import Game from "./game";
import {GameContext} from "./gameContextProvider";
import  CheckWinner from "./CheckWinner"

function Grid(props){
    let allGrids;
   
    const {nextPlayer,changePlayer,setGridFullFunc,gridFull, handleWinner,winner,resetGame } = useContext(GameContext)

    let emptyGrids=[]; let winnerPlayer;

   
  

    function handleClick(event){

        if(!gridFull && event.target.innerHTML == "" && winner == ""){
            event.target.style.color="black";
            event.target.innerHTML = nextPlayer;
            
            changePlayer();
            }
     
        allGrids = document.querySelectorAll(".grid");

        winnerPlayer = CheckWinner(allGrids);
        
        if(winnerPlayer){
        handleWinner(winnerPlayer)}
       

        allGrids.forEach(grid => {
            if(grid.innerHTML == "" ){
                emptyGrids.push(grid)
            }

        })
       
        if(emptyGrids.length == 0){
            setGridFullFunc()
        }
        emptyGrids=[];

       

    }

    useEffect(()=>{
console.log("useeffect")
        if(resetGame){
            allGrids = document.querySelectorAll(".grid");
            allGrids.forEach(grid => grid.innerHTML = "")
    
        }
        
    },[resetGame])


    return(
    <div className={`grid ${props.class}`}  onClick={handleClick} >
        
    </div>)
}





export default Grid;