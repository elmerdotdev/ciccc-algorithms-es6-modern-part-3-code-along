// RECURSION - a function calls on it itself similar to a loop
function countToTen(num) {
  if (num <= 10) {
    console.log(num)
    countToTen(num + 1)
  }
}
countToTen(0)




function factorial(num) {
  if (num <= 1) {
    return 1
  }
  return num * factorial(num - 1)
}
// 5 * 4 * 2 * 1
console.log(factorial(3)) // 120

// 5 * 4 * 3 *2 * 1 = 120
// 3 * 2 * 1 = 6

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(num) {
  if (num <= 1) {
    return num
  }
  return fibonacci(num - 2) + fibonacci(num - 1)
}
console.log(fibonacci(10)) // 8
// 0, 1, 1, 2, 3, 5, 8, 13


function reverseString(word) {
  if (word === "") {
    return ""
  }
  return reverseString(word.substring(1)) + word[0]
}
console.log(reverseString("hello")) // olleh