// Print a square of size N using the character 'x'
const n = parseInt(process.argv[2], 10);

if (isNaN(n)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < n; i++) {
    console.log('x'.repeat(n));
  }
}
