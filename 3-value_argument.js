// Print the first argument passed to the script, or "No argument" if none
const firstArg = process.argv[2];

if (firstArg === undefined) {
  console.log('No argument');
} else {
  console.log(firstArg);
}
