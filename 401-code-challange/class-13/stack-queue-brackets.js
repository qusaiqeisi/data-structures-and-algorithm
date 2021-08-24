"use strict";
const Stack = require("./Stack");

function validateBrackets(string) {
  let stack = new Stack();

  //convert string to array
  let stringArr = string.split("");

  let charactersSampel = [];
  stringArr.forEach((item) => {
    if (item == "{" || item == "[" || item == "(") {
      // console.log("push this", item);
      stack.push(item);
    }
    else if (item == "}" && stack.peek() == "{") {
      stack.pop();
    } else if (item == "]" && stack.peek() == "[") {
      stack.pop();
    } else if (item == ")" && stack.peek() == "(") {
      stack.pop();
    }
    else {
      charactersSampel.push(item);
    }
  });

  if (
    stack.peek() ||
    charactersSampel.includes("}") ||
    charactersSampel.includes("]") ||
    charactersSampel.includes(")")
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = validateBrackets;