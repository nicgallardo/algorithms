//check two see if string is one edit away if so return true else false
//pale, ple => true
//pale, bale => true
//pale, bake => false

console.log(checkForEdits('pale', 'bake'));
function checkForEdits(compareString, mutatedString) {
  var count = 0;
  var mutatedArray = mutatedString.split('');
  for (var i = 0; i < mutatedArray.length; i++) {
    if(compareString.indexOf(mutatedArray[i]) < 0) count++;
  }
  return count > 1 ? false : true;
}
