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

// Array di dalam Object
ktp.pekerjaan.forEach(function(item) {
    console.log(`${item} adalah pekerjaan ${ktp.nama}`)
})

// Array literal
const bahasaPemrograman = ["Javascript", "PHP", "Python", "Golang"];

// Array with multiple lines
const namaProgrammer = [
    "Brendan Eich",
    "Rasmus Lerdorf",
    "Guido van Rossum",
    "Ken Thompson",
    "Rob Pike",
    "Robert Griesemer"
];

// Array with new keyword
const programmingLanguages = new Array("Javascript", "PHP", "Python", "Golang");
console.log(bahasaPemrograman) 
console.log(namaProgrammer.length) // Output: 6

// Nested Array
const arrays = [bahasaPemrograman, namaProgrammer]
console.log(arrays)

// Array push
const brands = ["Apple", "Samsung", "Xiaomi"]
brands.push("Lenovo")
console.log(brands) 

// Array pop
brands.pop()
console.log(brands)