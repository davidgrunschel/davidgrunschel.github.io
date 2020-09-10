function toCode() {

thekey= window.document.form.ta1.value;
if ( (thekey==' ') || (thekey==null) )  {    thekey="XXX"; }
thekey=thekey.toUpperCase(); 
karry= new Array(thekey.length);
j=0;
conv="";
for (i=0; i<thekey.length; i++) {
    karry[i]=thekey.charCodeAt(i); }


thecode= window.document.form.ta2.value;
if ( (thecode==' ') || (thecode==null) )  {    thecode="YYY"; } 
thecode=thecode.toUpperCase();
carry= new Array(thecode.length);
for (i=0; i<thecode.length; i++) {
    carry[i]=thecode.charCodeAt(i); }


for (i=0; i<thecode.length; i++) {
    if (j==thekey.length)  { j=0; }
    carry[i]=carry[i]+karry[j];
    if ( carry[i]>95 )  { carry[i]= carry[i]-64; }
    conv=conv.concat(String.fromCharCode(carry[i]));
    j++; }
  

window.document.form.ta3.value=conv;
}



function toMess() {

thekey= window.document.form.ta1.value;
if ( (thekey==' ') || (thekey==null) )  {    thekey="XXX"; }
thekey=thekey.toUpperCase(); 
karry= new Array(thekey.length);
j=0;
conv="";
for (i=0; i<thekey.length; i++) {
    karry[i]=thekey.charCodeAt(i); }


thecode= window.document.form.ta3.value;
if ( (thecode==' ') || (thecode==null) )  {    thecode="YYY"; } 
carry= new Array(thecode.length);
for (i=0; i<thecode.length; i++) {
    carry[i]=thecode.charCodeAt(i); }


for (i=0; i<thecode.length; i++) {
    if (j==thekey.length)  { j=0; }
    carry[i]=carry[i]-karry[j];
    if ( carry[i]<32 )  { carry[i]= carry[i]+64; }
    conv=conv.concat(String.fromCharCode(carry[i]));
    j++; }

conv=conv.toLowerCase();
window.document.form.ta2.value=conv;
}