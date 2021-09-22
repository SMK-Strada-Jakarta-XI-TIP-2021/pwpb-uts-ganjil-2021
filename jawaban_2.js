// Jawaban Soal 2

function luasLahan (panjang, lebar){
 return panjang * lebar
}
function pajak(panjang, lebar){
    let luas = luasLahan(panjang,lebar);
    if(luas < 150){
        return luas * 100000;
    }
    else{
        return luas * 150000;
    }
}
function areaLahan(panjang,lebar){
    let luas = luasLahan(panjang,lebar);return luas /(2*2);
}
function bibitJagung (panjang,lebar){
    let luas = luasLahan(panjang,lebar);
    let area = areaLahan(panjang,lebar);
    return (luas/(2*2)) * area;
}
console.log(`luasnya ${luasLahan(12,12)} meter persegi`);
console.log(`pajak yang harus dibayar adalah Rp${pajak(12,12)}`);
console.log(`jumlah area tanam ada ${areaLahan(12,12)}`);
console.log(`jumlah bibit jagung nya ada ${bibitJagung(12,12)}`);