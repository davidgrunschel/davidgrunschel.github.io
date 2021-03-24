# davidgrunschel.github.io

This webpage (https://davidgrunschel.github.io) contains a JavaScript program (programmed by me) which enables users to encipher and decipher secret messages using a secret key.
The particular method used makes this cipher very similar to the Vigenère cipher (https://en.wikipedia.org/wiki/Vigenère_cipher).
The cipher is most secure when the key is random and has a character length on the order of the character length of the message.

All 95 printable characters in ASCII can be utilized, with character codes 32 through 126, inclusive.  These are:

&nbsp;!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~

Above, the first character is the space character.  In case the user enters line feeds (which are ASCII character 10) in the original plaintext message (by pressing 'Enter'), I convert line feeds to spaces (ASCII character 32) before enciphering.  The deciphered message then will have spaces in place of line feeds.
