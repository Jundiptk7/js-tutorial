// var //global scope, redaclared, reassignment, hoisted
var a = 2;
console.log(a);
a = 3;
{
  var a = 4;
}
console.log(a);

// let //block scope, reassignment
let b;
b = 1;
b = 6;
{
  let b = 2;
  console.log(b);
}

// const //block scope, immutable
const c = 9;
{
  const c = 0;
  console.log(c);
}

// selalu gunakan const jika nilai tidak akan berubah
