if (window.name == "Level 2") {
    //Samar
    function diagonal(row, numofcol) {
        numofrow = row;
        var count = 0;
        clssName = document.getElementById(numofcol + '' + numofrow).className;
        if (numofcol >= 4) {
            for (i = numofcol - 1; i >= 0; i--) {
                if (count < 4 && numofrow < 5) {

                    numofrow++;
                    if (clssName == document.getElementById(i + '' + numofrow).className)
                        count++;
                    else {
                        count = 0;
                    }


                }
                else
                    break;
            }

        }
        else if (numofcol <= 2) {

            for (i = numofcol + 1; i < 0; i++) {
                if (count < 4 && numofrow < 5) {

                    numofrow++;
                    if (clssName == document.getElementById(i + '' + numofrow).className)
                        count++;
                    else {
                        count = 0;
                    }
                }
                else
                    break;
            }
        }

        if (count == 4)
            return true;
        else
            return false;
    }

    //Yasmina
    function winRow(cells) {
        /*
        check if the first 5 cells in the same row have 
        the same class name then check the second 5 cells  
        and so on..then turn to the second row and check..
        */
        for (var i = 0; i <= 41; i += 7) {
            if (cells[i].className == "fullplayer2" && cells[i + 1].className == "fullplayer2" &&
                cells[i + 2].className == "fullplayer2" && cells[i + 3].className == "fullplayer2" && cells[i + 4].className == "fullplayer2"
                || cells[i + 1].className == "fullplayer2" && cells[i + 2].className == "fullplayer2" && cells[i + 3].className == "fullplayer2" &&
                cells[i + 4].className == "fullplayer2" && cells[i + 5].className == "fullplayer2" || cells[i + 2].className == "fullplayer2" &&
                cells[i + 3].className == "fullplayer2" && cells[i + 4].className == "fullplayer2" &&
                cells[i + 5].className == "fullplayer2" && cells[i + 6].className == "fullplayer2") {
                //cover.style.display = "block";
                return true;
            }
            if (cells[i].className == "fullplayer1" && cells[i + 1].className == "fullplayer1" &&
                cells[i + 2].className == "fullplayer1" && cells[i + 3].className == "fullplayer1" && cells[i + 4].className == "fullplayer1"
                || cells[i + 1].className == "fullplayer1" && cells[i + 2].className == "fullplayer1" && cells[i + 3].className == "fullplayer1" &&
                cells[i + 4].className == "fullplayer1" && cells[i + 5].className == "fullplayer1" || cells[i + 2].className == "fullplayer1" &&
                cells[i + 3].className == "fullplayer1" && cells[i + 4].className == "fullplayer1" &&
                cells[i + 5].className == "fullplayer1" && cells[i + 6].className == "fullplayer1") {
                //cover.style.display = "block";
                return true; 
            }


        }//end for

        return false; 
    }//end win row level 2

    //Sara
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
    //check winner virtical level2
    function checkCol(player) {
        for (var j = 0; j < 7; j++) {
            for (var i = 5; i >= 4; i--) {
                if ((board[i][j] == 1 && board[i - 1][j] == 1 && board[i - 2][j] == 1 && board[i - 3][j] == 1 && board[i - 4][j] == 1)
                    || (board[i][j] == 2 && board[i - 1][j] == 2 && board[i - 2][j] == 2 && board[i - 3][j] == 2 && board[i - 4][j] == 2)) {

                    //win = player;
                    //alert("player" + win + "win");
                    //return 1;
                    return true; 
                }

            }
        }
        return false;
    }

}