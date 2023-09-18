const newgrid =  [[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],
[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],
[null,null,null,null,null,null,null],[null,null,null,null,null,null,null]]
let grid = newgrid
gridd = [[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],
[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],
[null,null,null,null,null,null,null],[null,null,null,null,null,null,null]]
let count = 2
let gameOver = false
let i = 0
let j = 0
let newrow = [5,5,5,5,5,5,5]
let newcolumn = []
//local storage in browser investigate to be used as a database

function clearBoard() {
    for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 6; columnIndex++) {
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


function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 6; //is.array returns true if array is array
}

function isValidColumn(columnArray) {
    return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["red", "yellow", null].includes(item); });
    //every method executes a function for each array element.
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
    takeTurn(rowIndex, columnIndex);
    const board = getBoard(); //board initialized to grid
    // if (!isValidRowOrColumn(board) || !board.every(isValidColumn)) {
    //     throw "Expecting 'getBoard' to return a 2d array where all values match are null or one of the strings 'nought' or 'cross'. Actually received: " + JSON.stringify(board);
    //  }
   drawBoard(board);
    // const winner = checkWinner();
    // if (winner) {
    //     // if (typeof winner !== "string" || !["noughts", "crosses", "nobody"].includes(winner)) {
    //     //     throw "Expecting 'checkWinner' to return null or one of the strings 'noughts', 'crosses' or 'nobody'. Actually received: " + winner;
    //     // }
    //     //console.log(winner)
    //     const winnerName = document.getElementById("winner-name");
    //     winnerName.innerText = winner;
    //     const winnerDisplay = document.getElementById("winner-display");
    //     winnerDisplay.style.display = "block";
    // }
}

function takeTurn(row, column) {
   
   row = newrow[column]
   newcolumn.push(column) 
   // console.log(row)
   // console.log("takeTurn was called with row: "+row+", column:"+column);
    const val = grid[row][column] 
    if(count%2 === 0 && val === null ) {

       grid[row][column] = "red"
       gridd[row][column] = grid[row][column]
       for (item of newcolumn){
        if (item === column){
            newrow[column]-=1
           // console.log(newrow)
            break;
        }
       }
     count+=1  
    }
     else if ( count%2 !== 0 && val === null){
        grid[row][column] = "yellow"
        gridd[row][column] = grid[row][column]
        for (item of newcolumn){
            if (item === column){
              newrow[column]-=1
          // console.log(newrow)
            break;
            }         
           }
        count-=1
       
     }
     newcolumn.push(column)
     //console.log(newcolumn)
}


function getBoard() {
    console.log("getBoard was called");   
    return grid}


    function resetGame() { 
        for( i = 0 ; i< 6 ; i++){
            for (j = 0 ; j<7 ; j++)
            {
                grid[i][j] = null
             }     
            }
    console.log("resetGame was called");
    count = 2
    newrow = [5,5,5,5,5,5,5]
     gameOver = false
        grid =  [[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],[null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],[null,null,null,null,null,null,null]]
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
  clearBoard();
}

btn.addEventListener("mouseover", hoover);
btn.addEventListener("mouseout", nohoover);
// resetbutton.addEventListener("mouseover", hoover);
// resetbutton.addEventListener("mouseout", nohoover);

function winnner_name(){
    
}