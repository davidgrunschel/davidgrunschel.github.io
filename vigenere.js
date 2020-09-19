function toCode() {

    theKey = window.document.form.ta1.value;
    theKey = theKey.toUpperCase(); 
    keyArray = new Array(theKey.length);
    j = 0;
    conv = "";
    
    for (i = 0; i < theKey.length; i++) {
        keyArray[i] = theKey.charCodeAt(i);
    }

    theMess = window.document.form.ta2.value;
    theMess = theMess.toUpperCase();
    codeArray = new Array(theMess.length);
    
    for (i = 0; i < theMess.length; i++) {
        codeArray[i] = theMess.charCodeAt(i);
        if (codeArray[i] == 10)  {codeArray[i] = 32}  // If a line feed is entered, change it to a space.
    }

    for (i = 0; i < theMess.length; i++) {
        if (j == theKey.length)  {j = 0}
        codeArray[i] = codeArray[i] + keyArray[j];
        if (codeArray[i] > 95)  {codeArray[i] = codeArray[i] - 64}
        conv = conv.concat(String.fromCharCode(codeArray[i]));
        j++;
    }
    
    window.document.form.ta3.value = conv;
}

function toMess() {

    theKey = window.document.form.ta1.value;
    theKey = theKey.toUpperCase(); 
    keyArray = new Array(theKey.length);
    j = 0;
    conv = "";

    for (i = 0; i < theKey.length; i++) {
        keyArray[i] = theKey.charCodeAt(i);
    }

    theCode = window.document.form.ta3.value;
    messArray = new Array(theCode.length);

    for (i = 0; i < theCode.length; i++) {
        messArray[i] = theCode.charCodeAt(i);
    }

    for (i = 0; i < theCode.length; i++) {
        if (j == theKey.length)  {j = 0}
        messArray[i] = messArray[i] - keyArray[j];
        if (messArray[i] < 32)  {messArray[i] = messArray[i] + 64}
        conv = conv.concat(String.fromCharCode(messArray[i]));
        j++;
    }

    conv = conv.toLowerCase();
    window.document.form.ta2.value = conv;
}