//samar
//check if data not null and load board home
function chkdata(event) {
    var txt1 = document.forms[0].elements[0];
    var txt2 = document.forms[0].elements[1];
    if (txt1.value == "") {
        txt1.focus();
        txt1.select();
        return false;
    }
    else {
        txt2.value = "Computer";
    }
}
