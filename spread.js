// SPREAD - Objects: copy over the properties, Arrays: copy over the elements
const students = [
  { firstName: "John", age: 25 },
  { firstName: "Jane", age: 23 },
  { firstName: "Jack", age: 27 }
]

const studentsB = [
  { firstName: "Mary", age: 35 }
]

const copyStudents = [...students]
copyStudents.push({ firstName: "Mary", age: 26 })
console.log(copyStudents)
console.log(students)

const allStudents = [...studentsB, ...students]
console.log(allStudents)


const school = {
  school: "CICCC",
  address: "816 Granville St.",
  city: "Vancouver",
  province: "British Columbia",
  country: "Canada"
}

const newStudent = {
  firstName: "John",
  lastName: "Smith",
  course: "WAD",
  ...school
}

console.log(newStudent)


let staff = [
  { id: 1, firstName: "John", lastName: "Smith", salary: 10000},
  { id: 2, firstName: "Jane", lastName: "Doe", salary: 10000},
  { id: 3, firstName: "Jack", lastName: "Woe", salary: 10000},
]

function updateStaff(id, newSalary) {
  const updatedArr = staff.map(employee => {
    if (employee.id === id) {
      return {
        ...employee,
        salary: newSalary
      }
    } else {
      return employee
    }
  })

  staff = [...updatedArr] // update the original staff array
}

updateStaff(2, 30000)
console.log(staff)


const studentInfo = { firstName: "John", lastName: "Smith", age: 23 }
const emergencyContact = { emergencyPhone: "(111) 222-3333", relationship: "Mother" }

const studentDetails = {
  ...studentInfo,
  ...emergencyContact,
  sports: ['baseball', 'soccer'],
  emergencyPhone: "(444) 555-6666",
}

console.log(studentDetails)


function calcBirthYear(age) {
  return 2024 - age
}

console.log(calcBirthYear(25))