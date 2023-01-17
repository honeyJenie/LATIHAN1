const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray)=>{
    if (nilaiAkhir <= nilaiAwal){
        return "Nilai akhir  harus lebih besar dari nilai awal"
    } else if (dataArray.length <= 5){
        return "Jumlah angka dalam dataArray harus lebih dari 5"
    };
    let hasil =[];
    for (let i = 0; i < dataArray.length; i++){
        if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir){
            hasil = [...hasil,dataArray[i]]
        };
    };

    hasil.sort((a,b)=>a-b);
    return hasil;
}

console.log(seleksiNilai(3,17,[3, 8, 7, 1, 2, 5, 10, 13, 30]))