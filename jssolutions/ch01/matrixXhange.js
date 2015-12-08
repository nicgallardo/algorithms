var array = [
  ['x', 'x', 'x'],
  ['x', 'x', 'o'],
  ['x', 'x', 'x']
]
console.log(changeMatrix(array));
function changeMatrix(array) {
  var xAxis, yAxis;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] !== 'x') {
        xAxis = i;
        yAxis = j;
      }
    }
  }
  for (var i = 0; i < array[xAxis].length; i++) {
    array[xAxis].splice([i]-1, 1, 'o');
  }
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      array[i].splice(yAxis, 1, 'o')
    }
  }
  return array;
}
