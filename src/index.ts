import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Example setup
rl.question('Enter a number: ', (answer: string) => {
  console.log(`You entered: ${answer}`);
  rl.close();
});