// CLOSURE - allows to keep in memory variable values by returning a function
function multiplier(factor) {
  return function(num) {
    return num * factor
  }
}

const myMultipler = multiplier(5)
console.log(myMultipler(2)) // 10


function counter() {
  let count = 0 // this does not reset

  return {
    increment: function() {
      count++
    },
    decrement: function() {
      count--
    },
    getCount: function() {
      return count
    }
  }
}

const myCounter = counter() // count = 0
myCounter.increment()
myCounter.increment()
myCounter.increment()
myCounter.increment()
myCounter.decrement()
console.log(myCounter.getCount()) // 3

const myCounter2 = counter() // count = 0
myCounter2.increment() 
myCounter2.increment()
console.log(myCounter2.getCount()) // 2