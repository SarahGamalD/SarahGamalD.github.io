//Samar 
var index = 0;
//move right
function moveRight(ballmove) {

    index++;
    if (index > 6) {
        index = 0;
    }

    imageLeft += ballmove.width + 6;
    if (imageLeft <= (imgLeft + (ballmove.width + 6) * 6)) {
        ballmove.style.left = imageLeft + "px";
    } else {
        imageLeft = imgLeft;
        ballmove.style.left = imageLeft + "px";
    }

}//end of right

//move left
function moveLeft(ballmove) {
    index--;
    if (index < 0)
        index = 6;
    imageLeft -= ballmove.width + 6;
    if (imageLeft >= imgLeft) {
        ballmove.style.left = imageLeft + "px";
    }
    else {
        imageLeft = (imgLeft + (ballmove.width + 6) * 6);
        ballmove.style.left = imageLeft + "px";
    }

}//end of left

//move down
function moveDown(ballmove, player) {
    imageTop = imgTop;
    //check which div empty 
    if (document.getElementById(index + '0').className == "") {
        for (var i = 5; i >= 0; i--) {
        
      
            target = document.getElementById(index + '' + i);
            if (target.className == "") {
                imageTop = imgTop +(5+i)+ (54 * (i + 1));
                ballmove.style.top = imageTop + "px";
                if (player == 0) {
                    target.className = "fullplayer1";
                    //sara{
                    //change value in array
                       board[i][index] = 1;

                   //} 
                }
                    
                else {
                    target.className = "fullplayer2";
                    //sara {
                    //change value in array
                    board[i][index] = 2;
                    //}
                  
                }

                //Yasmina
                //check horizontal 
                var checkHorizontal=winRow(cells); 
                //winRowLevel2(cells);


                //sara
                //check vertical 
                var checkVertical = checkCol(player);


                //samar
                //check diagonal if you in level 2 
                if (window.name == "Level 2") {
                    if (i <= 1) {
                        var checkdiagonal = diagonal(i, index);
                    }
                }

                break;
            }
        }

        //check if any player win and show div of win if not switch player and continue playing
        if (checkVertical || checkHorizontal || checkdiagonal)
        {
            cover.style.display = "block";
            window.removeEventListener("keydown", moves);
            //Yasmina {
            
            if (player == 0) {
                confirmm.children[0].innerHTML = first;
            }
            if (player == 1) {
                confirmm.children[0].innerHTML = second;
            }
            // } end of Yasmina
        }
            
        else if (document.getElementById("second").innerText != "Computer")
            ballmove = turn(player);
        else {
                if (player == 0) {
                    ballmove = turn(player)
                    pcturn(ballmove);
                    player++;
                    ballmove = turn(player);
                }
             }       
    }
   return ballmove;

    
    
}//end of down

//func of keypress
function moves(event) {


    switch (event.keyCode) {
        case 37: // Left
            moveLeft(ball);
            break;


        case 39: // Right
            moveRight(ball);
            break;

        case 40: // Down
             
            var newball = moveDown(ball, player);
            if (document.getElementById("second").innerText =="Computer") {
                ball = newball;
                if (player == 2)
                    player = 0;
            }
            else if (ball.src != newball.src)
            {
                ball = newball;
                player++;
                if (player == 2)
                    player = 0;
            }   
            
            break;
    }//end of switch
}

//switch player
function turn(plyr) {
    ballmove = document.createElement("img");
    if (plyr == 0) {
        ballmove.src = "../img/ball2.gif";
    }
    else {
        ballmove.src = "../img/ball1.gif";
    }//end if 

    //create player ball
    ballmove.className = "ball";
    ballplace.appendChild(ballmove);
    imageLeft = ballmove.x;
    imageTop = ballmove.y;
    index = 0;
    return ballmove;
}//end of func

//computer turn
function pcturn(moveball) {

    if (player == 1);
    var index = parseInt((Math.random()) * 7);
    for (var i = 0; i <= index; i++) {
        moveRight(moveball);
    }

    moveDown(moveball);
}//end of func




//load of js
window.addEventListener("load", function () {
    //Yasmina {
    var firstName = document.getElementById("first");
    var secondName = document.getElementById("second");
    afterAnd = location.search.substring(1).split("&");
    var afterEqual = afterAnd[0].split("=");
    first = unescape(afterEqual[1]);
    afterEqual = afterAnd[1].split("=");
    second = unescape(afterEqual[1]);

    firstName.innerHTML =  first;
    secondName.innerHTML = second;

    //}//end of Yasmina 

    //sara
    playButton = document.getElementsByTagName("input")[2];
    playButton.onclick = function () {
        playButton.style.display = "none";

        //samar {
        //fetch element
        ball = document.getElementsByClassName("ball")[0];
        baseElement = document.getElementById("gameBoard");
        player = 0;
        imgLeft = ball.x;
        imageLeft = imgLeft;
        imgTop = ball.y;

        if (window.name == 'Level 1') {
            document.getElementsByClassName("level")[0].style.display = "inline";
        } else if (window.name == 'Level 2') {
            document.getElementsByClassName("level")[1].style.display = "inline";
        }

        //keypress (arrow right, arrow left, arrow down)
        window.addEventListener("keydown", moves);

        // }end of Samar

        //Yasmina {
        var con = false;
        confirmm = document.getElementById("confirm");
        var innerDiv = document.getElementById("innerDiv");
        var cover = document.getElementById("cover");
        var greenbtn = document.getElementById("greenbtn");
        var redbtn = document.getElementById("redbtn");
        cover.onclick = function () {
            cover.style.display = "none";
        }
        greenbtn.onclick = function () {
            con = true;
            cover.style.display = "none";
            location.reload();
        }
        redbtn.onclick = function () {
            con = false;
            cover.style.display = "none";
            location.href = "../html/HomePage.html";
        }
        cells = [];
        for (var i = 0; i <= 6; i++)
        {
            cells[i]=document.getElementById(i + '' + 0);//row 1
            cells[i+7]=document.getElementById(i + '' + 1);//row 2
            cells[i+14]=document.getElementById(i + '' + 2);//row 3
            cells[i+21]=document.getElementById(i + '' + 3);//row 4
            cells[i+28]=document.getElementById(i + '' + 4);//row 5
            cells[i+35]=document.getElementById(i + '' + 5);//row 6
        }
        //end of yasmina
    }
    

});//end load