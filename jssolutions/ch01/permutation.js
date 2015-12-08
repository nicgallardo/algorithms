//right a function to see if a string is a permuation of another.
//returns true if its a permuation else false;

console.log(permuationCheck('abcd', 'aaaa'));
function permuationCheck(originalString, compareString) {
  var originalArray = originalString.split('').sort();
  var compareArray = compareString.split('').sort();
  var count = 0;
  if(originalArray.length != compareString.length){
    return false;
  }else {
    for (var i = 0; i < compareArray.length; i++) {
      if(originalArray[i] == compareArray[i])count ++;
    }
    return count == originalArray.length ? true : false;
  }
}
