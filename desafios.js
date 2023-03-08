// alert("HOLA");

// DESAFIOS JS
// Multiplica todos los elementos por dos
// **********************************************************
let array = [2, 4, 5, 6, 8];

function multiplyElements(array) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(element * 2);
    });
    return console.log("1. Multiplica todos los elementos por dos :" + "\n" + "El Input es :" + "[" + array + "]" + "\n" + "El Output es : " + "[" + newArray + "]"),
        document.write("1. Multiplica todos los elementos por dos :" + "</br>" + "El Input es :" + "[" + array + "]" + "</br>" + "El Output es : " + "[" + newArray + "]");
}
multiplyElements(array);
// **********************************************************

// asi quedo en la plataforma y paso el desafio
// *************************
// export function multiplyElements(array) {
//     let newArray = [];
//     array.forEach(element => {
//        newArray.push(element * 2);
//     });
//     return newArray;
//  }
// **********************************************************

const letters = ['a', 'b', 'c'];
letters.forEach(element => console.log(element));

// Vs

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
}

