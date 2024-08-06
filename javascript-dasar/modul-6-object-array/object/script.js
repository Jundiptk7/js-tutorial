// object
// object literal
// const person = {
//   name: "jundi",
//   age: 24,
//   job: "software developer",
// };
// console.log(person);

// person.email = "jundi@email.com";
// console.log(person);
// console.log(person["job"]);

// usign new keyword
// let person = new Object();
// person.name = "jundi";
// person.age = 24;
// person.job = "software developer";

// console.log(person);

// delete person.job;
// console.log(person);

// object constructor
// function Person(name, age, hobby, job) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
//   this.job = job;
// }

// const jundi = new Person("jundi", 24, "traveling", "enterpreneur");
// const zaid = new Person("zaid", 24, "traveling", "software engineer");
// const koko = new Person("koko", 25, "reading", "CEO");

// const a = [jundi, zaid, koko];
// console.table(a);

// method pada object
// const person = {
//   name: "zaid",
//   age: 24,
//   job: "enterpreneur",
//   hobby: "traveling",
//   email: "zaid@email.com",
//   greet: function () { //method
//     console.log(`hello my name is ${this.name}`);
//   },
// };

// person.greet();

// for in
// const person = {
//   name: "zaid",
//   age: 24,
//   job: "enterpreneur",
//   hobby: "traveling",
//   email: "zaid@email.com",
//   greet: function () {
//     console.log(`hello my name is ${this.name}`);
//   },
// };

// for (let key in person) {
//   console.log(person[key]);
//   console.log(person.key);
//   console.log(key);
// }

// destructuring object
// const person = {
//   name: "zaid",
//   age: 24,
//   job: "enterpreneur",
//   hobby: "traveling",
// };
// console.log(person);
// const { name, age, job, hobby } = person;
// console.log(name);
// console.log(hobby);
// console.log(job);

// const newPerson = { ...person }; //menyalin objek menggunakan spread operator
// console.log(newPerson);

// const additionalInfo = {
//   email: "zaid@email.com",
//   country: "Indonesia",
// };
// const mergedPerson = { ...person, ...additionalInfo }; //menggabungkan object menggunakan spread opreator
// console.log(mergedPerson);
