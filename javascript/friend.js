//samar
//check if data not null and load board home
function chkdata(event) {
   
    gloo = event;
    var txt1 = document.forms[0].elements[0];
    var txt2 = document.forms[0].elements[1];
    if (txt1.value == "") {
        txt1.focus();
        txt1.select();
        return false;
    }
    if (txt2.value == "") {
            txt2.focus();
            txt2.select();
            return false;
    }
    
}


