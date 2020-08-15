// const msg = 'TypeScript'

// function sayHello(msg:string) {
//   return 'Hello,' + msg
// }

// document.body.innerHTML = sayHello(msg)


////////////////////////////////////////

class Student {
  fullName: string;
  constructor(public firstName:string){
    this.fullName = firstName
  }
}

interface Person {
  firstName: string,
  fullName: string,
}

function sayHello(person:Person) {
  return `Hello, ${person.fullName}`
}

let user = new Student('June')

document.body.innerHTML = sayHello(user)
