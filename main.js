const namaEvent = "MotoGP";
const lokasi = "Sirkuit Internasional Mandalika";
const tanggalEvent = "18 - 20 Maret 2022";

console.log(`Jangan lupa saksikan ${namaEvent} yang akan berlangsung pada ${tanggalEvent} di ${lokasi}`);
// Output: Jangan lupa saksikan MotoGP yang akan berlangsung pada 18 - 20 Maret 2022 di Sirkuit Internasional Mandalika

let hargaMinyakGorengKemasan = 20000;
hargaMinyakGorengKemasan = 14000;
console.log(hargaMinyakGorengKemasan);

const apakahKoruptorMerugikanNegara = true;
const apakahHukumanKoruptorSudahAdil = false;

console.log(apakahKoruptorMerugikanNegara);
console.log(apakahHukumanKoruptorSudahAdil);

// Object literal
const ktp = {
    nama: "ALamanda Shantika",
    alamat: {
        jalan: "Jl. Sudirman 101",
        "rt/rw": "03/09"
    },
    pekerjaan: [
        "President Director Binar Academy",
        "Independent commissioner Mandiri Capital Indonesia"
    ]
};

console.log(ktp.nama)
console.log(ktp["alamat"]["jalan"])
console.log(ktp.alamat["rt/rw"])
