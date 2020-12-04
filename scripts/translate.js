import { dictionary } from "./data.js";

const translateToMorse = (input) => {
    const word = input
    .split(' ')
    .map(
        (word) => word
        .split('')
        .map((character) => dictionary[character]
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
            return Object.keys(dictionary).find(key => dictionary[key] === character)
        }
    ).join('')
    ).join(' ');
    console.log('to English');
    console.log(word);
    return word;
}

// translateToMorse('hello mate');
// translateToEnglish('.... . .-.. .-.. ---   -- .- - .');

export { translateToMorse, translateToEnglish };


