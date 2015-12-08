//linkedlist practice

var d = ["i am d"];
var c = ["i am c", d];
var b = ["i am b", c];
var a = ["i am a", b];

//try to get to d using recusion from parent;
console.log(findBase(a));
// console.log(a[1]);
function findBase(parent){
  go(parent)
  function go(elem) {
    if(typeof elem[1] == undefined || 'undefined'){
      return elem[0];
    }else {
      go(elem[1]);
    }
  }
}
