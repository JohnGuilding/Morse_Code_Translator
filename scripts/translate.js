// import { englishArray, morseArray } from "./data.js";
import { translationDataObject } from "./data.js";


// const englishForm = document.querySelector(".english-form");
// const englishTranslation = document.querySelector(".english-translation");

// const translateEnglish = () => {
// 	englishTranslation.innerHTML = "";

// 	const output = englishForm.morseCode.value;
	
// 	const inputArray = [...output];
	
// 	inputArray.forEach((inputLetter) => {
// 		englishArray.forEach((arrayLetter) => {
// 			if (inputLetter == arrayLetter) {
// 				morseArray.forEach((arrayMorse) => {
// 					if (
// 						morseArray.indexOf(arrayMorse) == englishArray.indexOf(arrayLetter)
// 					) {
// 						englishTranslation.innerHTML += " " + arrayMorse;
// 					}
// 				});
// 			}
// 		});
// 	});
// }

// const morseTranslation = document.querySelector(".morse-translation");
// const morseForm = document.querySelector(".morse-form");

// const translateMorse = () => {
//         morseTranslation.innerHTML = "";
    
//         const output = morseForm.morseCode.value;
    
//         const inputArray = output.split(" ");
    
//         inputArray.forEach((inputLetter) => {
//             morseArray.forEach((arraySymbol) => {
//                 if (inputLetter == arraySymbol) {
//                     console.log(morseArray.indexOf(arraySymbol));
    
//                     englishArray.forEach((arrayLetter) => {
//                         if (
//                             englishArray.indexOf(arrayLetter) == morseArray.indexOf(arraySymbol)
//                         ) {
//                             console.log(arrayLetter);
//                             morseTranslation.innerHTML += arrayLetter;
//                         }
//                     });
//                 }
//             });
//         });
// }

const translateToMorse = (input) => {
    const word = input
    .split(' ')
    .map(
        (word) => word
        .split('')
        .map((character) => translationDataObject[character]
    ).join(' ')
    ).join('   ');
    console.log('to Morse');
    console.log(word);
    return word;
}

const translateToEnglish = (input) => {
    const word = input
    .split('  ')
    .map(
        (word) => word
        .split(' ')
        .map((character) => {
            return Object.keys(translationDataObject).find(key => translationDataObject[key] === character)
        }
    ).join('')
    ).join(' ');
    console.log('to English');
    console.log(word);
    return word;
}

export { translateToMorse, translateToEnglish };