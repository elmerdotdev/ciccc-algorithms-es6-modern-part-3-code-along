// REST PARAMETERS - stores all unassigned arguments into an array
const bossman = "John Smith"
const emp1 = { firstName: "Jane", age: 27 }
const emp2 = { firstName: "Joe", age: 24 }
const emp3 = { firstName: "Jack", age: 31 }

function intro(boss, ...employees)  {
  const employeeNames = employees.reduce((names, curr) => {
    return names += ` ${curr.firstName}`
  }, "")
  return `The employees of ${boss} are ${employeeNames.trim()}.`
}

console.log(intro(bossman, emp1, emp2, emp3))
