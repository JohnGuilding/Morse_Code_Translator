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
	" ": " "
};

// const message = "hello";

const translate = (input) => {
    const word = input
    .split(' ')
    .map(
        (word) => word
        .split('')
        .map((character) => translationDataObject[character]))
    // ).join('')
    // ).join(' ');
    console.log(word);
}
// const translate = (input) => {
//     const word = input
//     .split(' ')
//     .map(
//         (character) => character
//         .split('')
//         .map((b) => translationDataObject[b]
//     ).join('')
//     ).join(' ');
//     console.log(word);
// }

// return morseCode
// .split('   ')
// .map(
//   a => a
//     .split(' ')
//     .map(
//       b => ref[b]
//     ).join('')
// ).join(' ');
// }

translate('hello mate');