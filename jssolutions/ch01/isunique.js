console.log("expected: true, result: ", checkForUnique('bad thug'));
console.log("expect false, result: ", checkForUnique('ho hum'));
function checkForUnique(string) {
  var array = string.split('');
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) > -1){
      if(obj.hasOwnProperty(array[i])){
        return false;
      }
      obj[array[i]] = array[i];
    }
  }
  return true;
}
