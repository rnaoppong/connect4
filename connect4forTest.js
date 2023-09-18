const newgrid =  [[null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null],
                [null,null,null,null,null,null,null]]
let grid = newgrid
let count = 2
let gameOver = false
let i = 0
let j = 0
let newrow = [5,5,5,5,5,5,5]
let newcolumn = []
let redTurns = 0
let yellowTurns = 0
let redScore = 0
let yellowScore = 0
let currentRedScore = 0
let currentYellowScore = 0
let play1 = null
let play2 = null
let scores =[]
let playernames = []
let functionCount = 0
let winnerrrr = ""
let x = 0
let counterx = 0
let object ={}
let new_obj = {}
let counter = 0
let update1 = 0
let update2 = 0
let redValue = 0
let yellowValue = 0 
//clearIt()
getJSON()
let winnerx = null

function getJSON(){ //getting data from local storage
if (  JSON.parse(window.localStorage.getItem('records')) !== null){
    new_obj = JSON.parse(window.localStorage.getItem('records'));
   playernames = Object.keys(new_obj)
   scores = Object.values(new_obj);
   console.log(scores)
   console.log(playernames.length)
   if ( counterx < 1){
    console.log("I have called JSON")
    counterx+=1
    scoreBoardUpdate()
}
}}

function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = "" //set all rows and columns to zero
        }
    }
}

function hoover(e) {
  e.stopPropagation() // <-- Fixed!
  btn.style.background =  "grey"
  // resetbutton.style.background = "grey"
  }
  function nohoover(e) {
  e.stopPropagation() // <-- Fixed!
  btn.style.background =  "#f2f2f2"
  // resetbutton.style.background =  "#f2f2f2";
  }


function drawBoard(board) {
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue; //continue skips over an iteration
            }
            const cellText = board[rowIndex][columnIndex] === "red" ? "🔴" : "🟡";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = cellText;
            // setting boxes to the cell text value
        }
    }
}
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
        //null,rowind,colind is borrowing positionclick method
    }
}

function positionClick(rowIndex, columnIndex, event) {
    console.log(counter)
    takeTurn(rowIndex, columnIndex , counter);
   // console.log(counter)
    const board = getBoard(); 
   drawBoard(board);
   const winner = checkWinner();
    // console.log(winner)
     if (winner) {  
         const winnerName = document.getElementById("winner-name");
         winnerName.innerText = winner;
         const winnerDisplay = document.getElementById("winner-display");
         winnerDisplay.style.display = "block";
         scoreBoardUpdate()
     }
   
if(gameOver === false){
    const playername = color;
    if (playername === "yellow"){
        const p_1 = "🔴" + " " + document.getElementById("fname").value;
        let currentPlayer = document.getElementById("current-player")
        currentPlayer.innerText = p_1;
    }
    else if (playername === "red"){
        const p_2 = "🟡" + " " + document.getElementById("lname").value ;
        let currentPlayer = document.getElementById("current-player")
        currentPlayer.innerText = p_2;
    }
    const playerDisplay = document.getElementById("player-display");
    playerDisplay.style.display = "block";
}
else{
        const p_3 = "Game Over"
        let currentPlayer = document.getElementById("current-player")
        currentPlayer.innerText = p_3;
}
}
function scoreBoardUpdate(){
    console.log("I have been called by JSON")
         for (let b = 0; b < scores.length ; b++) {
                document.getElementById(`winnerrScore${b}`).innerText = scores[b]
                document.getElementById(`winnerrname${b}`).innerText = playernames[b]
                //  console.log(scores[b])
              }
                 console.log("I have run")
         arrayToObject()        
     
}

function takeTurn(row, column , counter) {
   
   row = newrow[column]
   newcolumn.push(column) 
   
    const val = grid[row][column] 
    if(count%2 === 0 && val === null && play1 !== null ) {
       grid[row][column] = "red"
       redTurns+=1
       for (item of newcolumn){
        if (item === column){
            newrow[column]-=1
            break;
        }
       }
     count+=1  
    }
     else if ( count%2 !== 0 && val === null && play2 !== null){
        grid[row][column] = "yellow"
        yellowTurns+=1
        for (item of newcolumn){
            if (item === column){
              newrow[column]-=1
            break;
            }         
           }
        count-=1
     }
     newcolumn.push(column)
     color = grid[row][column]
     counter = count;
    // console.log (counter)

     return  color
}


function getBoard() {
    console.log("getBoard was called");   
        return grid
   }


function resetGame() { 
    for( i = 0 ; i< 6 ; i++){
        for (j = 0 ; j<7 ; j++)
        {
            grid[i][j] = null
         }     
        }
console.log("resetGame was called");
count = 2
winnerx = null
newrow = [5,5,5,5,5,5,5]
redTurns = 0
yellowTurns = 0
 gameOver = false
    grid =  [[null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]]
    return grid
}

const resetButton = document.getElementById("resetbutton");
resetButton.addEventListener("click", resetClick);

function resetClick(click) {
  resetGame();
  const winnerName = document.getElementById("winner-name");
  winnerName.innerText = "";
  const winnerDisplay = document.getElementById("winner-display");
  winnerDisplay.style.display = "None";
  let currentPlayer = document.getElementById("current-player")
  currentPlayer.innerText = "";
  clearBoard();
}

// btn.addEventListener("mouseover", hoover);
// btn.addEventListener("mouseout", nohoover);
// resetbutton.addEventListener("mouseover", hoover);
// resetbutton.addEventListener("mouseout", nohoover);

function checkWinner() {
    console.log (gameOver)
    let winner = null
    let ourWinner = null

    if (gameOver === false){
        for (i = 5 ; i>=0 ; i--) { //horizontal
            for (j = 0 ; j<6 ; j++){
                if ( grid[i][j] ===  grid[i][j+1]
                    && grid[i][j]  ===  grid[i][j+2]
                    && grid[i][j]  ===  grid[i][j+3]
                    && grid[i][j] !== null ){
                        console.log ("horizontal checkwinner")
                        ourWinner === "someone"
                       whoWon()
                    break;
                 }    
            } 
            if (ourWinner !== null) { break }
        } 

     if (!winner){ //vertical
            for( i = 0 ; i< 3 ; i++){
                 for (j = 0 ; j<7 ; j++){
                     if ( grid[i][j] ===  grid[i+1][j] 
                        && grid[i][j]  ===  grid[i+2][j] 
                        && grid[i][j]  ===  grid[i+3][j] 
                        && grid[i][j]!== null){
                            console.log ("vertical checkwinner")
                            ourWinner === "someone"
                            whoWon()
                         break;
                        }  
                    }
                    if (ourWinner  !== null) { break } 
            } 
       }

       if (!winner){ //diagonals
              for( i = 0 ; i< 3 ; i++){
                for (j = 0 ; j<7 ; j++){
                  if (   grid[i][j] ===  grid[i+1][j+1]
                     && grid[i][j]  ===  grid[i+2][j+2] 
                     && grid[i][j]  ===  grid[i+3][j+3] 
                     && grid[i][j]!== null){
                        console.log ("diag checkwinner")
                        ourWinner === "someone"
                        whoWon()
                      break;
                   }
                 else if (  grid[i][j] ===  grid[i+1][j-1] 
                        && grid[i][j]  ===  grid[i+2][j-2] 
                        && grid[i][j]  ===  grid[i+3][j-3] 
                        && grid[i][j]!== null){
                            console.log ("diag checkwinner")
                            ourWinner === "someone"
                            whoWon()
                     break;
                    } 
                }
                   if (ourWinner  !== null) { break }
             }
        }
if (winnerx !== null){
    winner =  whoWon()
}
       

    if (winner !== null ){
   
            gameOver = true
            console.log("gameover");
            winnerrrr = winner
            scoresCalculate()
      }  
 }
 counter = count;
 console.log("checkWinner was called");
return winner;
}

function whoWon(){
    if (count === 3) {
        winnerx = document.getElementById("fname").value
    }
    else if (count === 2) {
        winnerx = document.getElementById("lname").value
    } 
    console.log("who won was called");
    console.log(winnerx);
    return winnerx
}
function scoresCalculate(){ // calculating player scores
   if (count === 3 ){
        redScore = 42 - redTurns
        currentRedScore+=redScore
        console.log(`red - ${currentRedScore}`)
    }
    
    if (count === 2 ){
        yellowScore = 42 - yellowTurns
        currentYellowScore+=yellowScore
        console.log(`yellow - ${currentYellowScore}`)
} 
console.log(" names function was called")
//names_scores()
updateGame()
}

function setHighScore(){ // setting highscore in winner display
     if (count === 3 ){
    playerScore = document.getElementById("playerScore")
    playerScore.style.display = "block"
    playerScore.innerText = redValue
}

if (count === 2 ){
    
    playerScore = document.getElementById("playerScore")
    playerScore.style.display = "block"
    playerScore.innerText = yellowValue
} 

}

function updateGame(){ // updating players score
    x = 0
    y = 0
    console.log(count)
    
 for (item of playernames){// updating existing players score
    if( item === play1 && count === 3 ){
        console.log(currentRedScore)
        let PlayerIndex = playernames.indexOf(item)
        scores[PlayerIndex] = scores[PlayerIndex] + redScore
        redValue = scores[PlayerIndex]
        update1 +=1
       break;
       
    }
    else{
        redValue = currentRedScore
        console.log(currentRedScore)
    }

    if (item === play2 && count === 2){
        let PlayerIndex = playernames.indexOf(item)
        scores[PlayerIndex] = scores[PlayerIndex] + yellowScore
        update2 +=1
        yellowValue = scores[PlayerIndex]
    break;
    
    }
    else{
        yellowValue = currentYellowScore
    }
      
 }
 if (playernames.length === 0 && count === 3){// updating new players score
    scores.push(currentRedScore)
    playernames.push(winnerrrr)
    redValue = currentRedScore
}

if(playernames.length === 0 && count === 2){
    scores.push(currentYellowScore)
        playernames.push(winnerrrr)  
        yellowValue = currentYellowScore
       
}
arrayPush()
setHighScore()
 console.log(" update function was called")
}

function arrayPush(){ // pushing new players  score into array
    console.log(update1)
    for (item of playernames){
        if( item !== play1 && count === 3 && update1 === 0){
                  scores.push(currentRedScore)
                    playernames.push(winnerrrr)
                    console.log(" scores pushed")
                    break;
                    
        }
        
        if (item !== play2 && count === 2 && update2 === 0){
            scores.push(currentYellowScore)
            playernames.push(winnerrrr)  
            console.log(" scores 2 pushed")
            break;
        }
     }
     update1 = 0
     update2 = 0
     console.log(" rhoda function was called")
}

function winner_name(){
    console.log(playernames)
    let kount1 = 0
    let kount2 = 0
     play1 = document.getElementById("fname").value;
     play2 = document.getElementById("lname").value;
     console.log(play1);
     console.log(play2);
console.log("Winnername was called");

redTurns = 0
yellowTurns = 0
currentRedScore = 0
currentYellowScore = 0
console.log(scores);
console.log(playernames)
console.log(currentRedScore);
console.log(currentYellowScore);
}

function arrayToObject(){ // converting array to oject

    for( let key of playernames){
        let PlayerIndex = playernames.indexOf(key)
        
      object[key] = scores[PlayerIndex] 
    }

    console.log(object)
    scoreRecords()
}
function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 6; //is.array returns true if array is array
}

function isValidColumn(columnArray) {
    return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["red", "yellow", null].includes(item); });
    //every method executes a function for each array element.
}
function scoreRecords(){ // pushing to local storage
    localStorage.setItem('records', JSON.stringify(object));
        getJSON() // return records
}

function clearIt(){ // deleting 
    console.log("clear called")
    localStorage.clear();
    getJSON()
    
}
// const module: {
//     exports: checkWinner;
// }
// // let module;
// module.exports = { takeTurn};
// module.exports = { checkWinner};

if (typeof exports === 'object') {

    console.log("Running in Node")

    // Node. Does not work with strict CommonJS, but only CommonJS-like

    // environments that support module.exports, like Node.

    module.exports = {

        takeTurn,

        checkWinner,

    }

} else {

    console.log("Running in Browser")

}