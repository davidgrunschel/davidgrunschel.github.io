# davidgrunschel.github.io

This webpage contains a JavaScript program (programmed by me) which enables users to encipher and decipher secret messages using a secret key.
The particular method used makes this cipher very similar to the Vigenere cipher which was first published in Paris in 1586 in Blaise de Vigenere's Traicté des chiffres.
The cipher is most secure when the key is random and has a character length on the order of the character length of the message.

A limitation of the cipher is that case-sensitive information in the original plaintext message is lost when it is enciphered.
The deciphered message then is all one case, not a combination of uppercase and lowercase.
In ASCII, the deciphered message comes out all uppercase, but then I convert it to all lowercase at the end.
The key is also not case sensitive.

To be precise, the original plaintext message (and the key) can only utilize ASCII characters 32 through 95.
The user can also use characters 97 to 122 (lowercase 'a' through 'z'), but those characters get converted to uppercase before enciphering, and the lowercase information is lost.
In case the user enters line feeds (which are ASCII character 10) in the original plaintext message (by pressing 'Enter'), I convert line feeds to spaces (ASCII character 32) before enciphering.  The deciphered message then will have spaces in place of line feeds.
Note also that the four characters {|}~ cannot be used in the original plaintext or key as they are ASCII characters 123 through 126.
Same for the ` character (ASCII character 96).
Update:  I have converted these five characters as well:
{ -> (
| -> /
} -> )
~ -> -
` -> '
