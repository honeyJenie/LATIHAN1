const mtk = 80;
const bhsIndo = 90;
const bhsInggris = 89;
const ipa = 69;

let rata2 = 0;
let grade = "";

if (mtk && bhsIndo && bhsInggris && ipa != null){
    rata2 = (mtk + bhsIndo + bhsInggris + ipa)/4;
    grade = rata2>=90 && rata2<=100?"A":rata2>=80 && rata2<=89?"B": rata2>=70 && rata2<=79?"C": rata2>=60 && rata2<=69?"D":"E";

};

console.log(`rata-rata = ${rata2}
grade = ${grade}`);
