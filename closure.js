function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }
  return inner;
}

const output = outer();
console.log(output());
console.log(output());
console.log(output());
console.log(output());

// here inner forms a closure with count
// outer is a higher order function because it returns a function (inner)
