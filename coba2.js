/*let a = 10.78;
let arrName = ["jenie", "jodie", "jessie", "yoyo"];

arrName.splice(4, 0, "kali", "roki");
console.log(arrName); 

console.log(arrName.sort());
console.log(arrName.reverse());

let arrNum = [27, 38, 13, 7, 9];
arrNum.sort(function (a,b){a-b});  
console.log(arrNum);*/

let x = "helium";
let y = "liu";
let hasil = "";
let temp = "";

// console.log(x[0])
for (i = 0; i < x.length; i++){
    for (j = 0; j < y.length; j++){
        if (x[i] === y[j]){
            hasil += x[i]
        }
    }
}
// console.log(hasil)

// promise function penjumlahan 2 angka

const cbCountDownEvent = (resolve,reject)=>{
    resolve('berhasil hayuu')
}
const countDownEvent = new Promise(cbCountDownEvent);



// console.log(countDownEvent)

const jumlahAngka = (a,b)=>{
    return new Promise ((resolve, reject)=>{
        success = true;
        if (typeof a !== "number" || typeof b !== "number"){
            success = false;
        };
        if (success){
            resolve (`Hasil = ${a+b}`);
        } else{
            reject ('Data harus number');
        };
    });
};

// console.log(jumlahAngka(3,"h"))

function cDE(endTime){
    return new Promise((resolve,reject)=>{
        if(typeof endTime !== "number" ){
            reject("Tipe Data Harus Number")
        }else{
            const jodie = setInterval(
                ()=>{
                    console.log(endTime)
                    endTime--;
                    if(endTime===0) {
                        clearInterval(jodie)
                        resolve("Berhasil")
                    }
                }
            ,1000)
        }
    })
    
}
// cara pemanggilan promise dengan then catch 
const timeEvent=()=>{
    cDE(10).then((res)=>{
        console.log(res)
        console.log("hayuu")
    }).catch((err)=>console.log(err))
}

// cara pemanggilan promise dengan try catch
const timeEvent2 = async()=>{
    try{
        const res = await cDE(10);
        console.log(res)
        console.log("hayu")
    }catch(err){
        console.log(err)
    }finally{
        console.log("ini selalu dijalankan")
    }
}

timeEvent2()

