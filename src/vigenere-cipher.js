const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(createDirectMachine = true) {
    if (createDirectMachine) {
      this.directMachine = true;
    } else {
      this.directMachine = false;
    }
  }
  encrypt(messageToEncrypt, key) {
    if (!messageToEncrypt || !key) throw new Error();

    const vigenereTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const charsForEncrypt = messageToEncrypt.toUpperCase().split('');
    const keysForEncrypt = key.toUpperCase().split('');
    
    let currentKeyIndex = 0;
    const encryptedChars = new Array();
    for (let i = 0; i < charsForEncrypt.length; i++) {
      const currentChar = charsForEncrypt[i];
      if (!vigenereTable.includes(currentChar)) {
        encryptedChars.push(currentChar);
        continue;
      }
      
      const currentKey = keysForEncrypt[currentKeyIndex % keysForEncrypt.length];
      currentKeyIndex += 1;
      const currentCharIndex = vigenereTable.indexOf(currentChar);
      const offset = vigenereTable.indexOf(currentKey);
      const encryptedCharIndex = (currentCharIndex + offset) % vigenereTable.length;
      const encryptedChar = vigenereTable[encryptedCharIndex];

      encryptedChars.push(encryptedChar);
    }

    return this.directMachine ? encryptedChars.join('') : encryptedChars.reverse().join('');
  }    
  decrypt(messageToDecrypt, key) {
    if (!messageToDecrypt || !key) throw new Error();

    const vigenereTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const charsForDecrypt = messageToDecrypt.toUpperCase().split('');
    const keysForDecrypt = key.toUpperCase().split('');
    
    let currentKeyIndex = 0;
    const decryptedChars = new Array();
    for (let i = 0; i < charsForDecrypt.length; i++) {
      const currentChar = charsForDecrypt[i];
      if (!vigenereTable.includes(currentChar)) {
        decryptedChars.push(currentChar);
        continue;
      }
      
      const currentKey = keysForDecrypt[currentKeyIndex % keysForDecrypt.length];
      currentKeyIndex += 1;
      const currentCharIndex = vigenereTable.indexOf(currentChar);
      const offset = vigenereTable.indexOf(currentKey);
      const decryptedCharIndex = (currentCharIndex + vigenereTable.length - offset) % vigenereTable.length;
      const decryptedChar = vigenereTable[decryptedCharIndex];

      decryptedChars.push(decryptedChar);
    }

    return this.directMachine ? decryptedChars.join('') : decryptedChars.reverse().join('');
  }    
}

module.exports = VigenereCipheringMachine;
