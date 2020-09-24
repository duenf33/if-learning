/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


 function isItLong(str) {
let x = str.length;
  if (x >= 20) {
    "that\'s a long string!";
  } else {
    // return undefined;
  }
}
// isItLong('1234567890');
console.log(isItLong('1234ffffjfjfjfjfjvvvvvvvvvvv'))

function isItMedium(str) {
  let x = str.length;
  if (x >= 9 && x <= 19) {
    return 'that\'s a regular sized string';
  } else {
    
  }
}

function isItShort(str) {
  let x = str.length
  if (x < 9) {
    return 'thats a small string';
  } else {
   return 'thats not a small string';
  }
}

function howLongIsMyString(str){
  let x = str.length;
  if (x >= 19){
    return "That's a long string!";
  } else if (x > 9 && x < 19) {
    return "That's a regular sized string!";
  } else {
    return "That's a small string!";
  }
}

let Colin = 62;
// let Mesuara = 69;
function instructorHeight(str) {

  if (Colin === 62) {
    return 62;
  } else if(Mesuara === 69) {
    return 69;
  } else {
    return 'I dont know that instructor';
  }
}




/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}