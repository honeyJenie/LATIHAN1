const printSegitiga = "lima";
let hasil = "";
if(typeof printSegitiga == "number"){

    for (i=printSegitiga; i>0; i--){
        for (j=1; j<=i; j++){
            hasil = hasil + j;
        }
        console.log(hasil);
        hasil = "";
    
    }

} else {
    console.log("Data harus number");
};