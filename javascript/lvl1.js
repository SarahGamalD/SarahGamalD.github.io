if (window.name == "Level 1") {
    //Yasmina
function winRow(cells) {
    /*
    check if the first 4 cells in the same row have 
    the same class name then check the second 4 cells  
    and so on..then turn to the second row and check..
    */

    for (var i = 0; i <= 41; i += 7) {
        if (cells[i].className == "fullplayer2" && cells[i + 1].className == "fullplayer2" &&
            cells[i + 2].className == "fullplayer2" && cells[i + 3].className == "fullplayer2" || cells[i + 1].className == "fullplayer2" &&
            cells[i + 2].className == "fullplayer2" && cells[i + 3].className == "fullplayer2" && cells[i + 4].className == "fullplayer2" ||
            cells[i + 2].className == "fullplayer2" && cells[i + 3].className == "fullplayer2" &&
            cells[i + 4].className == "fullplayer2" && cells[i + 5].className == "fullplayer2" ||
            cells[i + 3].className == "fullplayer2" && cells[i + 4].className == "fullplayer2" &&
            cells[i + 5].className == "fullplayer2" && cells[i + 6].className == "fullplayer2") {

           // cover.style.display = "block";

            return true; 
        }else if (cells[i].className == "fullplayer1" && cells[i + 1].className == "fullplayer1" &&
            cells[i + 2].className == "fullplayer1" && cells[i + 3].className == "fullplayer1" || cells[i + 1].className == "fullplayer1" &&
            cells[i + 2].className == "fullplayer1" && cells[i + 3].className == "fullplayer1" && cells[i + 4].className == "fullplayer1" ||
            cells[i + 2].className == "fullplayer1" && cells[i + 3].className == "fullplayer1" &&
            cells[i + 4].className == "fullplayer1" && cells[i + 5].className == "fullplayer1" ||
            cells[i + 3].className == "fullplayer1" && cells[i + 4].className == "fullplayer1" &&
            cells[i + 5].className == "fullplayer1" && cells[i + 6].className == "fullplayer1") {
            //cover.style.display = "block";

                 return true; 
              }

         

    }//end for
     return false; 
}//end win row level 1

//Sara
//check winner vertical level1
counter1 = 0;
counter2 = 0;
board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];
//check winner virtical level1
function checkCol(player) {
    for (var j = 0; j < 7; j++) {
        for (var i = 5; i >=3; i--) {

            if ((board[i][j] == 1 && board[i - 1][j] == 1 && board[i - 2][j] == 1 && board[i - 3][j] == 1)
                || (board[i][j] == 2 && board[i - 1][j] == 2 && board[i - 2][j] == 2 && board[i - 3][j] == 2)) {

                win = player;
                return true;
            }

        }
    }



} 
}