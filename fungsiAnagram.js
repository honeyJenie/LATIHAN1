const fxAnagram = (teks1, teks2) => {
    if (typeof teks1 !== "string" || typeof teks2 !== "string"){
        return "Teks untuk anagram harus string."
    } else if (teks1.length !== teks2.length){
        return "Panjang teks harus sama."
    };

    let arrTeks1 = [];
    let arrTeks2 = [];

    for (let i = 0; i < teks1.length; i++) {
        arrTeks1[i] = teks1[i]
        arrTeks2[i] = teks2[i]
    };
    arrTeks1 = arrTeks1.sort()
    arrTeks2 = arrTeks2.sort()

    let hasil1 = "";
    let hasil2 = "";
    for (let j = 0; j < arrTeks1.length; j++){
        hasil1 += arrTeks1[j];
        hasil2 += arrTeks2[j];
    }

    if(hasil1 === hasil2){
        return `${teks1}, ${teks2} = Anagram`
    } else {
        return `${teks1}, ${teks2} = Bukan Anagram`
    };

};

const result = fxAnagram("india", "oyo");
console.log(result)

const isAnagram =(text1,text2)=> text1.split("").sort().join() === text2.split("").sort().join();
console.log(isAnagram("india","nidia"))