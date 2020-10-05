// You’re tasked with creating a website that can translate between english and morse code.
// As an extension it should be able to translate both ways.

// 1. store alphabet
// 2. store morse code
// 3. listener on the btn listening for the click
// 4. ON CLICK -> run a function -> convert english to morse
// 5. 'convert english to morse' -> get the letter and find the corresponding morse
// 6. a) creat 2 arrays -> one with the letters of the alphabet -> 2 with morse
//    b) array of objects vs array of strings
//    c) objects with key value pairs
// 7. display the result
// 8. refresh button with event listener

// const morseArray = [
//     {'a' : '.-'},
//     {'b' : '-...'},
//     {'c' : '-.-.'},
//     {'d' : '-..'},
//     {'e' : '.'},
//     {'f' : '..-.'},
//     {'g' : '--.'},
//     {'h' : '....'},
//     {'i' : '..'},
//     {'j' : '.---'},
//     {'k' : '-.-'},
//     {'l' : '.-..'},
//     {'m' : '--'},
//     {'n' : '-.'},
//     {'o' : '---'},
//     {'p' : '.--.'},
//     {'q' : '--.-'},
//     {'r' : '.-.'},
//     {'s' : '...'},
//     {'t' : '-'},
//     {'u' : '..-'},
//     {'v' : '...-'},
//     {'w' : '.--'},
//     {'x' : '-..-'},
//     {'y' : '-.--'},
//     {'z' : '--..'},
//     {' ' : ' '}
// ];

const englishArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const morseArray = ['.-', '-...', '-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];


const translation = document.querySelector('.translation');

////////////////////////////// TRANSLATE FUNCTION //////////////////////////////

const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submitBtn");

// const getValue = () => {
    
//     let output = form.morseCode.value;
//     console.log(output);
//     return output;
// }
//     console.log(output);




submitBtn.addEventListener('click', () => {
    const output = form.morseCode.value;
    // console.log(output);

    const inputArray = [...output];
    // console.log(inputArray);

    inputArray.forEach((inputLetter) => {

        englishArray.forEach((arrayLetter) => {
            if (inputLetter == arrayLetter) {
                console.log(englishArray.indexOf(arrayLetter));
                morseArray.forEach((arrayMorse) => {
                    if (morseArray.indexOf(arrayMorse) == englishArray.indexOf(arrayLetter)) {
                        console.log(arrayMorse);
                    }
                });
            }
        });
    });
});



// for(let i = 0; i < morseArray.length; i++) {
//     if(letter == morseArray[i]) {
//         console.log('oh yes oh yes');
//     }
// }


















// // GET USER INPUT FROM FORM //
// const getValue = () => {
//     const form = document.querySelector("form");
//     output = form.morseCode.value;

//     // SETS INPUT TO ARRAY AND SPLITS STRING WITH SPREAD SYNTAX //
//     const inputArray = [...output];

//     // IF INPUT CHARACTERS MATCH LETTERS ARRAY DO SOMETHING... //
//     morseArray.forEach((objectIteration) => {
//         // const lettersArray = Object.keys(letter);

//         Object.entries(objectIteration).forEach(([key, value]) => {
//             // console.log(`${key}: ${value}`);
//             // return key;

//             inputArray.forEach((inputLetter) => {
//                 if (inputLetter == key) {
                
//                     // String(value);
//                     console.log(typeof value);
//                     translation.innerHTML += '  ' + value;
                    
//                 }
//             });

//         });

//     });
// }




    // morseArray.forEach((object) => {
    //     let newArray = Object.entries(keys);
    //     inputArray.forEach((inputLetter) => {
    //         if (inputLetter == newArray) {
    //             console.log('yo');
                
    //         }
    //     });
    // });




// console.log(morseArray.keys);


// Object.keys
// Object.values

