let kata = "malam";

let hasil = "";

for(i=0 ; i<kata.length ; i++){
    hasil += kata[kata.length-1-i]
};
if (kata===hasil) {
    console.log("palindrom")
} else {
    console.log("bukan palindrom")
}


