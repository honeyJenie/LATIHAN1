let data = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    adress: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
};

let updateData = {...data, name: "nama anda", email: "email anda", hobby: "hobi anda"};

console.log(`name: ${updateData.name}
email: ${updateData.email}
hobby: ${updateData.hobby}`);

const {street,city} = updateData.adress;
console.log(street, city);

const arrAngka =[ 23,24,12,22,32,11];
arrAngka.push(23);

console.log(arrAngka);
