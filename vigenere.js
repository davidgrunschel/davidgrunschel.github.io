function toCode() {

    j = 0;
    conv = "";
    
    theKey = window.document.form.ta1.value.toUpperCase();
    theMess = window.document.form.ta2.value.toUpperCase();

    for (i = 0; i < theMess.length; i++) {
        if (j == theKey.length)  {j = 0}
        iMess = theMess.charCodeAt(i);
        if (iMess == 10)  {iMess = 32}  // If a line feed is entered, change it to a space.
        iCode = iMess + theKey.charCodeAt(j);
        if (iCode > 95)  {iCode = iCode - 64}
        conv = conv.concat(String.fromCharCode(iCode));
        j++;
    }
    
    window.document.form.ta3.value = conv;
}

function toMess() {

    j = 0;
    conv = "";
    
    theKey = window.document.form.ta1.value.toUpperCase();
    theCode = window.document.form.ta3.value;
    
    for (i = 0; i < theCode.length; i++) {
        if (j == theKey.length)  {j = 0}
        iMess = theCode.charCodeAt(i) - theKey.charCodeAt(j);
        if (iMess < 32)  {iMess = iMess + 64}
        conv = conv.concat(String.fromCharCode(iMess));
        j++;
    }

    conv = conv.toLowerCase();
    window.document.form.ta2.value = conv;
}