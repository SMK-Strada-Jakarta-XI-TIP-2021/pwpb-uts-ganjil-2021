// Jawaban Soal 2
function luasTanah(x, y) {
    return x * y
}

function pembayaranPajak(x, y) {
    let pajak = luasTanah(x, y);
    if (pajak <150) {
        return pajak * 100000;
    } else {
        return pajak * 1500000;
    }
}

function  areaTanah(x, y) {
    let luas = luasTanah(x, y);
    return luas / (2 * 2);
}

function banyakBibit(x, y) {
    let luas = luasTanah(x, y);
    let area = areaTanah = areaTanah(x, y);
    return (luas/ (2 * 2)) * area;
}

console.log("hasil luas tanah = " + `${luasTanah(10,10)}` + "m");
console.log("Total pembayaran pajak = Rp" + `${pembayaranPajak(10, 10)}`);
console.log("Area tanah yang terpakai = " + `${areaTanah(10, 10)}` + "m");
console.log("Banyak bibit yang ditanam = " + `${banyakBibit(10, 10)}`);

