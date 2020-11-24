// import { translationDataObject } from "./data.js";
const translationDataObject = {
	"a": ".-",
	"b": "-...",
	"c": "-.-.",
	"d": "-..",
	"e": ".",
	"f": "..-.",
	"g": "--.",
	"h": "....",
	"i": "..",
	"j": ".---",
	"k": "-.-",
	"l": ".-..",
	"m": "--",
	"n": "-.",
	"o": "---",
	"p": ".--.",
	"q": "--.-",
	"r": ".-.",
	"s": "...",
	"t": "-",
	"u": "..-",
	"v": "...-",
	"w": ".--",
	"x": "-..-",
	"y": "-.--",
	"z": "--..",
	"1": ".----",
	"2": "..---",
	"3": "...--",
	"4": "....-",
	"5": ".....",
	"6": "-....",
	"7": "--...",
	"8": "---..",
	"9": "----.",
	"0": "-----",
	" ": "   ",
};

// const translationDataObjectm = {
// 	".-": "a", 
// 	"-...": "b",
// 	"-.-.": "c",
// 	"-..": "d",
// 	".": "e", 
// 	"..-.": "f", 
// 	"--.": "g", 
// 	"....": "h", 
// 	"..": "i", 
// 	".---": "j", 
// 	"-.-": "k", 
// 	".-..": "l", 
// 	"--": "m", 
// 	"-.": "n", 
// 	"---": "o", 
// 	".--.": "p", 
// 	"--.-": "q", 
// 	".-.": "r", 
// 	"...": "s", 
// 	"-": "t", 
// 	"..-": "u", 
// 	"...-": "v", 
// 	".--": "w", 
// 	"-..-": "x", 
// 	"-.--": "y", 
// 	"--..": "z", 
// 	".----": "1", 
// 	"..---": "2", 
// 	"...--": "3", 
// 	"....-": "4", 
// 	".....": "5", 
// 	"-....": "6", 
// 	"--...": "7", 
// 	"---..": "8", 
// 	"----.": "9", 
// 	"-----": "0", 
// 	"   ": " ",
// };


// another attempt at refactoring
// const translateToMorse = (input) => {
//     const words = input.split('')
//     keys = Object.keys(translationDataObject)
//     words.map((character) => {
//         keys.map((value) => {
//             if (character === value) {
//                 console.log(value);
//             }
//         })
//     })

//     // console.log(Object.keys(translationDataObject));
//     console.log('to Morse');
//     console.log(words);
// }

// const getKeyByValue = (object, value) => {
//     return Object.keys(object).find(key => object[key] === value);
// }
// const getValueByKey = (object, key) => {
//     return Object.values(object).find((value => object[value] === key))
// }
// const dictionary = {"a": "1", "b": "2"};
// console.log(getKeyByValue(dictionary, "a"));
// console.log(getValueByKey(translationDataObject, 'a'));

///////////////////////////////////////////////////////////////////////////////////
// const translateToMorse = (input) => {
//     const word = input
//     .split(' ')
//     .map(
//         (word) => word
//         .split('')
//         .map((character) => translationDataObject[character]
//     ).join(' ')
//     ).join('   ');
//     console.log('to Morse');
//     console.log(word);
// }

const translateToEnglish = (input) => {
    const word = input
    .split('  ')
    .map(
        (word) => word
        .split(' ')
        .map((character) => {
            return Object.keys(translationDataObject).find(key => translationDataObject[key] === character)
        }))
        // .map((character) => translationDataObject[character]
    
    // ).join('')
    // ).join(' ');
    // console.log('to English');
    console.log(word);
}

// translateToMorse('hello mate');
translateToEnglish('.... . .-.. .-.. ---   -- .- - .');

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}
// const dictionary = {"a": "1", "b": "2"};
console.log(getKeyByValue(translationDataObject, ".-"));
