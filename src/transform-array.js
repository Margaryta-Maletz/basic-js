
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error();
  }
  
  let resArr = new Array();
  for (let i=0; i<arr.length; i++){
    switch (arr[i]) {
      case '--discard-next': 
        i++;
        break;
      case '--discard-prev': 
        if (!(i===0)) {
          if (arr[i-2] !== '--discard-next' && arr[i-1] !== undefined) {
          resArr.pop();
          }
        }
         break;
      case '--double-next': 
        if (arr[i+1] !== undefined) resArr.push(arr[i+1]);
        break;
      case '--double-prev': 
        if (!(i===0)) {
          if (arr[i-2] !== '--discard-next' && arr[i-1] !== undefined) {
            resArr.push(arr[i-1]); 
          }  
        }
        break; 
      default: 
        resArr.push(arr[i]);
        break;
    }
  }
  return resArr;
};
