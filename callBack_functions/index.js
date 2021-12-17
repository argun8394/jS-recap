//CallBack Examples
/*

//forEach()

const payments=[100,300,-200,500,-400,225,1000,-700];

payments.forEach(function(item,i,array) {
    item>0 ? console.log(i,`you recevied ${item} USD`) : console.log(i,`you paid ${Math.abs(item)} USD `) //Math.abs yöntemi ile değerleri pozitife çevirdik


});
let sumPos=0;
let sumNeg=0;

payments.forEach(function(item,i,array) {
    item>0 ? sumPos+=item : sumNeg+=item;

})

console.log(sumPos,sumNeg);
*/

/*
//Map()

const str = "The Quick Brown Fox";

var newstr=str.split("").map(c=> c=== c.toUpperCase()? c.toLowerCase() : c.toUpperCase()).join(""); //tek satırda arrow function için return yazmaya gerek yok
console.log(newstr);
console.log(str);

*/

//filter()

const words=[
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
    "Clarusway",
    "Future"
];

const result = words.filter((word)=>word.length>6);
console.log(result);



