function sayHello (a, b){
    let teks = `Hai, ${a}`
   b(teks) 
}

function printHello (c){
    console.log(c)
}
sayHello("jodie", printHello)

// arrow function to check expired time
const checkExp = (dateExp=String) =>{

    //params validation
    if(!dateExp||typeof dateExp !=="string"){
        return "dateExp must be String"
    }
    //parsing param1 to Date
    const dt = new Date(dateExp);

    //check expired
    if(dt.getTime()<Date.now()){
        return "date is expired"
    };

    //calculate time left to expired
    const timeLeft = Math.ceil((dt - new Date(Date.now()))/ (1000 * 3600 * 24))
    return `${timeLeft} days left`;

}

// assign timeExp with value function checkExp()
const timeExp = checkExp("01/03/2023");

console.log(timeExp)