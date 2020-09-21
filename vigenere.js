function toCipher() {

    conv = "";
    theKey = window.document.form.ta1.value;
    thePlain = window.document.form.ta2.value;

    for (i = 0; i < thePlain.length; i++) {
        iPlain = thePlain.charCodeAt(i);
        if (iPlain == 10)  {iPlain = 32}   // If a line feed is entered, change it to a space.
        iCipher = ((iPlain + theKey.charCodeAt(i % theKey.length) - 64) % 95) + 32;
        conv = conv.concat(String.fromCharCode(iCipher));
    }
    
    window.document.form.ta3.value = conv;
}

function toPlain() {

    conv = "";
    theKey = window.document.form.ta1.value;
    theCipher = window.document.form.ta3.value;
    
    for (i = 0; i < theCipher.length; i++) {
        iPlain = ((theCipher.charCodeAt(i) + 95 - theKey.charCodeAt(i % theKey.length)) % 95) + 32;
        conv = conv.concat(String.fromCharCode(iPlain));
    }

    window.document.form.ta2.value = conv;
}
