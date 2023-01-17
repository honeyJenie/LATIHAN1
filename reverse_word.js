let kalimat = "Saya belajar Javascript";

let kata = [];
let hasil = "";

let j = 0;
kata[j]="";

for (i=0 ; i < kalimat.length ; i++){
    
    if(kalimat[i]!=" "){
        kata[j] += kalimat[i];
    }else{
        j++;
        kata[j]="";
    }
}

for (let j = 0 ; j < kata.length ; j++){
    let len=kata.length-1-j;
    hasil += kata[len];
    if (len!=0){
        hasil+=" .";
    }

}
// console.log(hasil);
/*
    1. kata = ["Saya","belajar","Javascript"]
    2. kata = ["Javascript","belajar","Saya"]
        kata += kata[3] 
        kata += kata[2]
      kata = "Javascript belajar Saya"
*/


const gol = "III";
let gaji = 0;
const s = "kawin";

if(s==="kawin"){
  gaji = 50000
}else if(gol==="I"){
    gaji= 10000
}else if (gol==="II"){
    gaji =20000
}else if(gol==="III"){
    gaji=30000
}



switch (gol) {
    case "I":
        gaji=10000
        break;
    case "II":
        gaji=20000
        break;
    case "III":
        gaji=30000
        break;
    default:
        gaji=7000
        break;
}


// if(gaji>=30000){
//     console.log("gaji diatas UMR")
// }else{
//     console.log("gaji dibawah umr")
// }

let hasil2 = gaji>=30000?"gaji diatas UMR":gaji===20000?"gaji pas pasan":"gaji dibawah UMR";


let hasil3 = `Saya adalah jodie dan ${gaji>=30000?"gaji diatas UMR":"gaji dibawah UMR"} ssd
kpsdo`;
console.log(hasil3);

const arrData=["jodie","jenie","yoyoe"];
const arrData2=["he", "hi", "hu","he", "ho"]
const newData = [...arrData, ...arrData2]

const umur = { 
    jessie:23, 
    jodie:21, 
    jenie:21, 
    yoyo:19,
    josid:()=>console.log("jodie hhauuu"),
    printS:(v)=>console.log(v+2)
}

const crypt={
    encrypt:()=>console.log("ini encrypt"),
    decrypt:()=>console.log("ini decrypt")
}

const dataJodie ={
    nama:"jodie",
    umur:21,
    nik:"3273061209010001",
    statusKawin:false,
    jenisKelamin:"laki-laki"
}


let arrDataDiri = [
    {
        nama:"jodie",
        umur:21,
        nik:"3273061209010001",
        statusKawin:false,
        jenisKelamin:"laki-laki"
    },
    {
        nama:"jenie",
        umur:21,
        nik:"3273061209010001",
        statusKawin:false,
        jenisKelamin:"perempuan"
    }
]

arrDataDiri= [
    ...arrDataDiri,
    {
        nama:"jeremy",
        umur:19
    }
]

const obj1={
    alamat:"jl. samiaji no9",
    kota:"Bandung"
}



const objMod= {
    ...arrDataDiri[1],
    ...obj1
}

console.log(objMod)