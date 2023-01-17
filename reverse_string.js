let teks = "Javascript";
// let hasil =""
// for(i=0 ; i < teks.length ; i++){
//     hasil = hasil + teks[teks.length-1-i]
// }

// console.log(hasil)

const reverseString = (teks,cb) => {
    let hasil = "";
    let objResult=  {
        success:true,
        message:"",
    }
    if (typeof teks !== "string"){
        objResult.success= false;
        objResult.message= "teks harus string"
        return !cb?objResult.message:cb(objResult)
    } else {
        for (i=0; i < teks.length; i++){
            hasil += teks[teks.length-1-i]
        };
        if (teks === hasil){
            objResult.message="polindrom"
        }else{
            objResult.message="bukan polindrom"
        }
        return !cb?objResult.message:cb({...objResult,reverseText:hasil,teks})
    }
}


const callbackRS = (res)=>{
    if(res.success){
        console.log(`kata ${res.teks} => ${res.message}`);
    }else{
        console.log(res.message)
        return new Error(res.message)
    }
}

reverseString(90, callbackRS);


