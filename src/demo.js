// const x = [12, 3, 4, 5, 6];
const x2 = [
  { name: "Joe", age: 17 },
  { name: "tom", age: 17 },
  { name: "Joe", age: 17 },
];

let unique = [...new Set(x2.map((ele) => ele.name))];
console.log(unique);
