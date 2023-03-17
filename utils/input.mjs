'use strict';

import readline from 'node:readline';

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function input(question = '') {
  return new Promise((resolve) => {
    rl.question(question, (input) => {
      resolve(input);
    });
  });
}

// async function test() {
//   console.log(await input('Masukkan angka percobaan: '));
//   rl.close();
// }

// test();
