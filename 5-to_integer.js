// Print "My number: <int>" if the first arg can be converted to an integer, else "Not a number"
const arg = process.argv[2];
const num = parseInt(arg, 10);

if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}
