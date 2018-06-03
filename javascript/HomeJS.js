window.addEventListener("load", function () {
    //Button with friend:
    friendButton = document.getElementsByTagName("button")[0];
    friendButton.onclick = function () {
        location.href = "../html/SelectLevelFriend.html";


    }//end of click
    //Button with computer:
    computerButton = document.getElementsByTagName("button")[1];
    computerButton.onclick = function () {
        location.href = "../html/SelectLevelcomputer.html";


    }//end of click




});//end of load