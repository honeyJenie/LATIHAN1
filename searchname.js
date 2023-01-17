const nama =  ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", 
            "Bella", "Carol", "Caroline", "Carolyn","Deirdre", 
            "Diana", "Elizabeth", "Ella", "Faith", "Olivia","Bella", "Penelope"];

// //========== sample callback ===========
// let isFind = -1;
// const cb = (v,i)=>{
//     if([1,3,5,6,10,14].includes(i)){
//         return {
//             nama:v,
//             status : "single"
//         }
//     }else return "hayuu"
// }

// const jodie = nama.map(cb)
// console.log(jodie)
// //==============================

const dumbwaySearch = (arrData,searchVal) =>{
    for(let i=0; i<arrData.length;i++){
        if( arrData[i]=== searchVal ) return "data ditemukkan";
    }
    return "data tidak ditemukkan"
}

// const result = dumbwaySearch(nama,"Bella");
const regx =/.+?(?=b)|(?=B)/
const result = nama.filter((v,i)=>v.match(regx))

console.log(result)
// Binnary Search
let arrNum=[1,3,4,2,3,1];
const searchVal = 9;

for(let i=0 ; i<3;i++){
    if(arrNum[i]===searchVal || arrNum[arrNum.length-1-i]===searchVal){
        console.log("data ditemukkan")
    }
} 

const searchName = (keyWord, total, cb)=>{
    if (typeof keyWord !== "string"){
        return "Keyword harus string"
    } else if (typeof total !== "number"){
        return "Total hasil harus number"
    };

    let searchVal = (value) => value.includes(keyWord);
    let hasil = nama.filter(searchVal);
    let hasilFinal = cb(hasil, total);
    return hasilFinal;
} 

const sliceFx = (a,b)=>{
    return a.slice(0,b);
}

console.log(searchName("An", 3, sliceFx));



/*const cbA = (val)=> val.includes("el");


const sampleFil = nama.filter(cbA)

console.log("sd",sampleFil.slice(0,3));*/

