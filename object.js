let person = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function (message) {
    return `${this.firstName} ${this.lastName}. ${message}`
  }
}

console.log(person.getFullName("I like games."))