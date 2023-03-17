'use strict';

import { rl, input } from './utils/input.mjs';

async function main() {
  console.log('Inputkan nilai dan ketik “q” jika sudah selesai');
  let nilaiSiswa = [];

  while (true) {
    let nilai = parseInt(await input());

    if (nilai) {
      nilaiSiswa.push(nilai);
    } else {
      break;
    }
  }

  rl.close();

  console.log('Selesai memasukan nilai, cari outputnya :');

  console.log(`Nilai tertinggi : ${Math.max(...nilaiSiswa)}`);
  console.log(`Nilai terendah : ${Math.min(...nilaiSiswa)}`);
  console.log(`Siswa lulus : ${nilaiSiswa.filter((e) => (e >= 60 ? true : false)).length}, Siswa tidak lulus : ${nilaiSiswa.filter((e) => (e < 60 ? true : false)).length}`);
  console.log(`Urutan nilai dari terendah ke tertinggi : ${nilaiSiswa.sort((a, b) => a - b)}`);
  console.log(`Siswa nilai 90 dan nilai 100 : ${nilaiSiswa.filter((e) => (e == 90 || e == 100 ? true : false))}`);
}

main();
