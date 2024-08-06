function nilaiHuruf(nilai) {
  if (nilai >= 90 && nilai <= 100) {
    return "A";
  } else if (nilai >= 80 && nilai < 90) {
    return "B";
  } else if (nilai >= 70 && nilai < 80) {
    return "C";
  } else if (nilai >= 60 && nilai < 70) {
    return "D";
  } else if (nilai >= 50 && nilai < 60) {
    return "E";
  } else {
    return "F";
  }
}

function deskripsiNilai(nilaiHuruf) {
  switch (nilaiHuruf) {
    case "A":
      return "Excellent";
    case "B":
      return "Good";
    case "C":
      return "Average";
    case "E":
      return "Below Average";
    case "F":
      return "Fail";
    default:
      return "Nilai tidak valid";
  }
}

function inputDataSiswa() {
  const siswa = [];

  do {
    const inputNama = prompt(`Masukan nama! (atau ketik 'selesai' untuk mengakhiri)`);
    if (inputNama.toLowerCase() === "selesai") {
      break;
    } else if (inputNama === "" || !isNaN(inputNama)) {
      alert("Nama tidak valid!\nMohon masukan nama yang benar!");
      continue;
    }

    const inputNilai = parseInt(prompt("masukan nilai siswa (0-100)"));
    if (isNaN(inputNilai) || inputNilai < 0 || inputNilai > 100) {
      alert(`Nilai tidak valid!\nMasukan nilai yang valid`);
      continue;
    }

    let huruf = nilaiHuruf(inputNilai);
    let deskripsi = deskripsiNilai(huruf);

    siswa.push({
      nama: inputNama,
      nilai: inputNilai,
      huruf: huruf,
      deskripsi: deskripsi,
    });
  } while (true);

  return siswa;
}

function rataNilaiSiwa(siswa) {
  let totalNilai = 0;
  siswa.forEach((s) => {
    totalNilai += s.nilai;
  });

  const rataRataNilai = totalNilai / siswa.length;
  const hasilAkhir = rataRataNilai.toFixed(2);
  console.log(`Total nilai siswa adalah : ${totalNilai}`);
  console.log(`Rata-rata nilai siswa adalah : ${hasilAkhir}`);
}

function peringkatSiswa(siswa) {
  const siswaTerurut = siswa.sort((a, b) => b.nilai - a.nilai);
  siswaTerurut.forEach((s, index) => {
    s.peringkat = index + 1;
  });

  console.log(`Peringkat siswa`);
  siswa.forEach((s) => {
    console.log(`${s.peringkat}. ${s.nama} nilai : ${s.nilai}`);
  });

  return siswaTerurut;
}

function tampilkanLaporanNilai(siswa) {
  console.log("Laporan nilai siswa");
  siswa.forEach((s) => {
    console.log(`${s.nama}: ${s.nilai} (${s.huruf} - ${s.deskripsi})`);
  });
  console.table(siswa);
}

const dataSiswa = inputDataSiswa();
tampilkanLaporanNilai(dataSiswa);
rataNilaiSiwa(dataSiswa);
peringkatSiswa(dataSiswa);
