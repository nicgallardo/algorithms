function howOften(string) {
  var obj = {};
  var toArray = string.split('');
  for (var i = 0; i < toArray.length; i++) {
    obj.hasOwnProperty(toArray[i]) ? obj[toArray[i]] ++ : obj[toArray[i]] = 1;
  return obj;
}
console.log(howOften('aabbbaa'));
