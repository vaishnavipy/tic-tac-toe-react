import react from "react";
import React from "react";
import Grid from "./grid";

function Game(){
   

   

    return(
    <div className="game-grid">
        <Grid />
        <Grid />
        <Grid class="noRight" />
        
        <Grid />
        <Grid />
        <Grid class="noRight" />
       
        <Grid class="noBottom" />
        <Grid  class="noBottom" />
        <Grid class="noRight noBottom" />

    </div>)
}

export default Game;