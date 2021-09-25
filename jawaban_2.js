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
    let luas = luasLahan(panjang,lebar);
    return Math.floor(luas /(2*2)) ;
}
function bibitJagung (panjang,lebar){
    let luas = luasLahan(panjang,lebar);
    let area = areaLahan(panjang,lebar);
    if (area % 2 === 0){
        return area * 15;
    }
    else{
        return Math.floor(area * 10);
    }
}
console.log(`luasnya ${luasLahan(15,15)} meter persegi`);
console.log(`pajak yang harus dibayar adalah Rp${pajak(15,15)}`);
console.log(`jumlah area tanam ada ${areaLahan(15,15)} petak`);
console.log(`jumlah bibit jagung nya ada ${bibitJagung(15,15)} bibit`);