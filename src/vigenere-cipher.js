const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(flag) {
    this.flag = flag;
  }

  encrypt(str, key) {
    if (str === 'undefined' || key === 'undefined') {
      return Error();
    }
    const strKey = key.toUpperCase().repeat(Math.ceil(str.length/key.length));
    let counter = 0,
        index, 
        result ='';
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++){
      index = 65+(strKey.charCodeAt(counter)-65+str.charCodeAt(i)-65)%26;
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        result += String.fromCharCode(index);
        counter++;
      } else {
        result += str[i];
      }
    }
    if (this.flag === false) {
      return result.split('').reverse().join('');
    }  
    return result;
  }    

  
  decrypt(str, key) {
    if (str === 'undefined' || key === 'undefined') {
      return Error();
    }
    const strKey = key.toUpperCase().repeat(Math.ceil(str.length/key.length));
    let counter = 0,
        index, 
        result ='';
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++){
      index = 65+(26+str.charCodeAt(i)-strKey.charCodeAt(counter))%26;
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        result += String.fromCharCode(index);
        counter++;
      } else {
        result += str[i];
      }
    }
    if (this.flag === false) {
      return result.split('').reverse().join('');
    }  
    return result;
  }
}

module.exports = VigenereCipheringMachine;
