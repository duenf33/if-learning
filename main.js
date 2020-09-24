/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


 function isItLong(str) {
let x = str.length;
  if (x > 20) {
    return "That's a long string!";

  } else {
    return undefined;
  }
}

function isItMedium(str) {
  let x = str.length;
  if (x >= 10 && x <= 20) {
    return "That's a regular sized string!";
  } else {
    return undefined;
  }
}

function isItShort(str) {
  let x = str.length
  if (x < 10) {
    return "That's a small string!";
  } else {
    return "That's not a small string!";
  }
}

function howLongIsMyString(str){
  let x = str.length;
  if (x > 20){
    return "That's a long string!";
  } else if (x > 9 || x < 19 && x === 19) {
    return "That's a regular sized string!";
  } else {
    return "That's a small string!";
  }
}

function instructorHeight(str) {
  if ("Colin" === str) {
    return 62;
  } else if("Mesuara" === str) {
    return 69;
  } else {
    return "I don't know that instructor!";
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