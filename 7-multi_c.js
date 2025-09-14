// Print "C is fun" x times, where x is the first CLI argument
const x = parseInt(process.argv[2], 10);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
