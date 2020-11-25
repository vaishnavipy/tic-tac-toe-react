


function CheckWinner(allGrids){

   const index=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

   for(let i=0;i<index.length;i++){

   
         if(allGrids[index[i][0]].innerHTML == allGrids[index[i][1]].innerHTML && allGrids[index[i][0]].innerHTML == allGrids[index[i][2]].innerHTML && allGrids[index[i][0]].innerHTML != "" && allGrids[index[i][1]].innerHTML != "" && allGrids[index[i][2]].innerHTML != ""){

            allGrids[index[i][0]].style.color="red";

            allGrids[index[i][1]].style.color="red";

            allGrids[index[i][2]].style.color="red";
            
            return allGrids[index[i][0]].innerHTML
       }

   }


}
export default CheckWinner;