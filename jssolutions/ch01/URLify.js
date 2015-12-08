//take a string and return the replace all spaces in the string with %20
//input "Mr John Smith   ";
//output Mr%20John%20Smith;
console.log(URLify("Mr John Smith   "));
function URLify(string) {
  return string.trim().split(' ').join('%20');
}
