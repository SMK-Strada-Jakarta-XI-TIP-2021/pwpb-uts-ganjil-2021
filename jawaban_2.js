// Jawaban Soal 2
// membuat luas
function luasTanah(lebar, panjang) {
    return panjang * lebar;
}

// buat harga pajak
function pajak(lebar, panjang) {
    let luas = luasTanah(lebar, panjang);
    if (luas < 150) {
        return luas * 100000;
    } else {
        return luas * 150000;
    }
}

// area tanaman 
function areaTanaman(lebar, panjang) {
    let luas = luasTanah(lebar, panjang);
    return luas / (2 * 2);
}

// 
function jmlhBibit(lebar, panjang) {
    let luas = luasTanah(lebar, panjang);
    let area = areaTanaman(lebar, panjang);
    // return area * 15;
    if (area % 2 === 0) {
        return area * 15; // jika areanya bukan bilangan koma
    } else {
        return area * 10; //ini masih belum tahu kalau areanya bilangan koma
    }
}

console.log(luasTanah(50, 50));
console.log(pajak(50, 50));
console.log(areaTanaman(50, 50));
console.log(jmlhBibit(10,20));
