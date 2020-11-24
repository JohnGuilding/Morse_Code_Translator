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

const translationDataObjectm = {
	".-": "a", 
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e", 
	"..-.": "f", 
	"--.": "g", 
	"....": "h", 
	"..": "i", 
	".---": "j", 
	"-.-": "k", 
	".-..": "l", 
	"--": "m", 
	"-.": "n", 
	"---": "o", 
	".--.": "p", 
	"--.-": "q", 
	".-.": "r", 
	"...": "s", 
	"-": "t", 
	"..-": "u", 
	"...-": "v", 
	".--": "w", 
	"-..-": "x", 
	"-.--": "y", 
	"--..": "z", 
	".----": "1", 
	"..---": "2", 
	"...--": "3", 
	"....-": "4", 
	".....": "5", 
	"-....": "6", 
	"--...": "7", 
	"---..": "8", 
	"----.": "9", 
	"-----": "0", 
	"   ": " ",
};

// const message = "hello";

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
}

const translateToEnglish = (input) => {
    const word = input
    .split('  ')
    .map(
        (word) => word
        .split(' ')
        .map((character) => translationDataObjectm[character]
    ).join('')
    ).join(' ');
    console.log('to English');
    console.log(word);
}

translateToMorse('hello mate')
translateToEnglish('.... . .-.. .-.. ---   -- .- - .');