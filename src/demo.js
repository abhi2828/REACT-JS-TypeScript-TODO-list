const x = [12, 3, 4, 5, 6];
const odd = x.filter((e) => {
  if (e > 5) {
    return e;
  }
});
console.log(odd);
