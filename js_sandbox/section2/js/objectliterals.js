//Object Literals
const person = {
  firstName: 'Simba',
  lastName: 'Dread',
  age: 59,
  married: false,
  hobbies: ['Music', 'Games', 'Boxing'],
  address: {
    state: 'Texas',
    city: 'Dallas'
  },
  getBirthYear: function () {
    return this.age;
  }
}
console.log(person.getBirthYear())
var people = [
  { name: 'Mike', title: 'Web Developer' },
  { name: 'David', title: 'Tech Lead' },
  { name: 'Ruth', title: 'Sales Manager' },
]

people.forEach(member => console.log(member.name, ':', member.title))