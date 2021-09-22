// Jawaban Soal 2
function luasTanah (panjang, lebar) {
    
    return panjang * lebar
}

function pajakDibayar (panjang, lebar) {
        let menghitungPajak = luasTanah(panjang, lebar);
        if (menghitungPajak < 150) {
            return menghitungPajak * 100000;
        } else {
            return menghitungPajak * 150000;
        }
    }

function areaTanah (panjang, lebar) {
        let luas = luasTanah(panjang, lebar)
        return luas / (2 * 2);
    }

function jumlahBibit (panjang, lebar) {
        let luas = luasTanah(panjang, lebar);
        let area = areaTanah (panjang, lebar);
        return (luas / (2 * 2)) * area;
    }

console.log(`Hasil luas tanah == ${luasTanah(10, 10)}m`);
console.log(`Total pajak yang dibayar == Rp.${pajakDibayar(10, 10)}`);
console.log(`Area tanah yang dipakai == ${areaTanah(10, 10)}m`);
console.log(`Bibit yang ditanam == ${jumlahBibit(10, 10)}`);
