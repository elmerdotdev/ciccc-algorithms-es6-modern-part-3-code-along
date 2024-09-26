const numbers = [3, 3, 4, 3, 5, 2, 1]
const uniqueNums = new Set(numbers) // Converts to a set object
for (const key of uniqueNums.keys()) {
  console.log(key)
}
// console.log(uniqueNums)

const students = ["John", "Jack", "Jane"]
const studentSet = new Set(students) // converts array to a set obj
studentSet.add('Joe') // adds a new item to the set
studentSet.delete()
// studentSet.clear() // clears the set
const newArr = [...studentSet] // convert back to array
console.log(newArr)