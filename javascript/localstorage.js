window.addEventListener("load", function () {
    players = [];
    Dates = [];
    var plyr1Date;
    var plyr2Date;
    btnply1 = document.getElementsByTagName("input")[0];
    btnply2 = document.getElementsByTagName("input")[1];

    if (localStorage.length != 0) 
    {
        players = JSON.parse(localStorage.Names);
        Dates = JSON.parse(localStorage.Times);
        
    }

    var plyr1 = document.getElementById("first").innerText;
    var plyr2 = document.getElementById("second").innerText;
    
     var date = new Date();
     indexplyr1 = -1;
     indexplyr2 = -1;
    for (var i = 0; i < players.length; i++) {
        if (players[i] == plyr1) {
            indexplyr1 = i;

        } else if (players[i] == plyr2) {
            indexplyr2 = i;
        }
    }
    if (indexplyr1 == -1) {
        players.push(plyr1);
        Dates.push(date.toString());
        btnply1.style.display = "none";

    }
    else {
        plyr1Date = Dates[indexplyr1];
        plyr1Date += ',' + date;
        Dates[indexplyr1] = plyr1Date;
    }
    if (indexplyr2 == -1) {
        players.push(plyr2);
        Dates.push(date.toString());
        btnply2.style.display = "none";

    }
    else {
        
        plyr2Date = Dates[indexplyr2];
        plyr2Date += ',' + date;
        Dates[indexplyr2] = plyr2Date;
    }
    if (players[indexplyr2] == "Computer")
    {
        btnply2.style.display = "none";
    }
    
    btnply1.onclick = function () {
        var divdata = document.getElementById("Data");
        divdata.children[1].innerText = "name:\n"+players[indexplyr1];
        divdata.children[2].innerText = "Dates:\n"+Dates[indexplyr1];
        divdata.style.display = "block";
        divdata.children[0].onclick = function () {
            divdata.style.display = "none";
        }



    }
    btnply2.onclick = function () {
        var divdata = document.getElementById("Data");
        divdata.children[1].innerText = "name:\n" + players[indexplyr2];
        divdata.children[2].innerText = "Dates:\n" + Dates[indexplyr2];
        divdata.style.display = "block";
        divdata.children[0].onclick = function () {
            divdata.style.display = "none";
        }



    }
    
    localStorage.setItem("Names", JSON.stringify(players));
    localStorage.setItem("Times", JSON.stringify(Dates));
});