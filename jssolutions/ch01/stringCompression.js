//string Comprssion
//aabbbcccc
//a2b3c4

console.log(stringCompression('aabbbcccc'));
function stringCompression(string) {
  var obj = {};
  var array = string.split('');
  for (var i = 0; i < array.length; i++) {
    obj.hasOwnProperty(array[i]) ? obj[array[i]] ++ : obj[array[i]] = 1;
  };
  returnArray = [];
  for(var key in obj){
    returnArray.push(key, obj[key])
  }
  return returnArray.join('');
}
