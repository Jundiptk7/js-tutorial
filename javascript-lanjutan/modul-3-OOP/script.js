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
class Kendaraan {
  constructor(merk) {
    this.merk = merk;
  }

  info() {
    return `ini adalah ${this.merk}`;
  }
}

class Mobil extends Kendaraan {
  constructor(merk, model) {
    super(merk);
    this.model = model;
  }

  info() {
    return `${super.info()}, model ${this.model}`;
  }
}

const kendaraan1 = new Kendaraan("Toyota");
console.log(kendaraan1);

const mobil1 = new Mobil("Toyota", "Hilux");
console.log(mobil1);
console.log(mobil1.info());
