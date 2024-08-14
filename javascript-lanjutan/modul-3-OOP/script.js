// OOP
// 1.class
// class Person {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
//   display() {
//     return `name: ${this.name}\nage: ${this.age}\njob: ${this.job}`;
//   }
// }

// const person1 = new Person("jundi", 24, "software engginer");
// const person2 = new Person("zaid", 24, "Enterpreneur");

// console.log(person1.display());
// console.log(person2.display());

// 2.inheritance(pewarisan)
// class Kendaraan {
//   constructor(merk) {
//     this.merk = merk;
//   }

//   info() {
//     return `ini adalah ${this.merk}`;
//   }
// }

// class Mobil extends Kendaraan {
//   constructor(merk, model) {
//     super(merk);
//     this.model = model;
//   }

//   info() {
//     return `${super.info()}, model ${this.model}`;
//   }
// }

// const kendaraan1 = new Kendaraan("Toyota");
// console.log(kendaraan1);

// const mobil1 = new Mobil("Toyota", "Hilux");
// console.log(mobil1);
// console.log(mobil1.info());

//3. polymorphism
// class Bird {
//   fly() {
//     console.log("The bird flies.");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     console.log("The penguin cannot fly");
//   }
// }
// const bird = new Bird();
// const penguin = new Penguin();

// bird.fly();
// penguin.fly();

// 4. encapsulation
// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(newAge) {
//     if (newAge > 0) {
//       this._age = newAge;
//     } else {
//       console.log("Age must be positive");
//     }
//   }
// }

// const person = new Person("jundi", 24);
// console.log(person.name);
// person.age = -1;
// console.log(person.age);

// 5. prototypal inharitance
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a sound.`);
// };

// function Dog(name) {
//   Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function () {
//   console.log(`${this.name} barks.`);
// };

// const dog = new Dog("rex");
// dog.speak();

// 6. super and subclass
// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   start() {
//     console.log(`${this.brand} engine started.`);
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(brand, type) {
//     super(brand);
//     this.type = type;
//   }

//   start() {
//     super.start();
//     console.log(`${this.brand} ${this.type} is ready to go!`);
//   }
// }

// const bike = new Motorcycle("yamaha", "sport");
// bike.start();

// 7. method chaining
// class Calculator {
//   constructor(value = 0) {
//     this.value = value;
//   }

//   add(number) {
//     this.value += number;
//     return this;
//   }

//   subtract(number) {
//     this.value -= number;
//     return this;
//   }

//   multiply(number) {
//     this.value *= number;
//     return this;
//   }

//   divide(number) {
//     this.value /= number;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

// const result = new Calculator(10).add(5).subtract(3).multiply(2).divide(3).getResult();
// console.log(result);
