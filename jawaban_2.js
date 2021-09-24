// Jawaban Soal 2

// luas
function luasTanah(lebar, panjang) {
    return panjang * lebar;
}

// harga pajak
function pajak(lebar, panjang) {
    let luas = luasTanah(lebar, panjang);
    if (luas < 150) {
        return luas * 100000;
    } else {
        return luas * 150000;
    }
}

// area tanaman 
function tanaman(lebar, panjang) {
    let luas = luasTanah(lebar, panjang);
    return luas / (2 * 2);
}

// jumlah bibit
function bibit(lebar, panjang) {
    let luas = luasTanah(lebar, panjang);
    let area = tanaman(lebar, panjang);
    return (luas / (2 * 2)) * area;
}

console.log(luasTanah(50, 50));
console.log(pajak(50, 50));
console.log(tanaman(50, 50));
console.log(bibit(50,50));