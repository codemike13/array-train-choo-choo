console.log("# ARRAY CHALLENGES");

const numbers = [3, 24, 15, -1, 200, 13, -80, 14, 10000, -19];

console.log("### Challenge #1");
// Console out each number in the `numbers` array, individually.

for (number in numbers) {
  console.log(numbers[number]);
}

console.log("### Challenge #2");
// Now do the same thing, but backwards.

for (i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

console.log("### Challenge #3");
// Console out each number plus 19, individually.
for (number in numbers) {
  console.log(numbers[number] + 19);
}

console.log("### Challenge #4");
// Console out the sum of all the numbers.
let sum = 0;
for (number in numbers) {
  sum += numbers[number];
}
console.log(sum);

console.log("### Challenge #5");
// Console out each number individually, but only if it's an even number.

for (number in numbers) {
  if (numbers[number] % 2 === 0) {
    console.log(numbers[number]);
  }
}

console.log("### Challenge #6");
// Console out each number, but only if it ends with a 4 digit.
let lastDigit = 0;
let numberEnd = "";
for (i = 0; i < numbers.length; i++) {
  lastDigit = numbers[i];
  numberEnd = lastDigit
    .toString()
    .split("")
    .pop();
  if (numberEnd !== "4") {
    continue;
  } else {
    console.log(lastDigit);
  }
}
console.log("### Challenge #7");
// Create a _new_ array and, using a loop, fill it with every number from the original array. Then console out the new array in one `console.log`.
let newArr = [];
for (number in numbers) {
  newArr.push(numbers[number]);
}
console.log(newArr);

console.log("### Challenge #8");
// Create a _new_ array and, using a loop, fill it with every item from the original array, but in reverse order. Then console out the new array in one `console.log`.
let newArrReverse = [];
for (i = numbers.length - 1; i >= 0; i--) {
  newArrReverse.push(numbers[i]);
}
console.log(newArrReverse);

console.log("### Challenge #9");
// Create a _new_ array and, using a loop, fill it with every odd-numbered item from the original array. Then console out the new array in one `console.log`.
let newArrOdd = [];
for (number in numbers) {
  if (numbers[number] % 2 !== 0) {
    newArrOdd.push(numbers[number]);
  }
}
console.log(newArrOdd);

console.log("### Challenge #10");
// Create a _new_ array and, using a loop, fill it with every number from the original array plus 1. Then console out the new array in one `console.log`.
let arrPlusOne = [];
for (number in numbers) {
  arrPlusOne.push(numbers[number] + 1);
}

console.log(arrPlusOne);

console.log("### Challenge #11");
let arrWithMsg = [];
const msg = " is one of the best numbers, objectively and obviously. ";
for (number in numbers) {
  arrWithMsg.push(numbers[number] + msg);
}

console.log(arrWithMsg);
// Create a _new_ array and, using a loop, fill it with every number from the original array, _followed by_, at the next index, the string, ' is one of the best numbers, objectively and obviously.' That is, the first item in the array should be the number 3, followed by the aforementioned string, followed by the number 24, followed by the string again.
