// Print the addition of 2 integers passed as arguments

function add(a, b) {
  return a + b;
}

const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);

console.log(add(a, b));
