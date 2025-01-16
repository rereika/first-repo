
//問題1
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


//問題2
function findMax(array) {
  return Math.max(...array);
}

const numbers = [10, 5, 8, 10, 3];
console.log(findMax(numbers));
