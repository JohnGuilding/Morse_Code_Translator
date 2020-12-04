import { dictionary } from "./data.js";

const translateToMorse = (input) => {
    const word = input.toLowerCase()
    .split(' ')
    .map(
        (word) => word
        .split('')
        .map((character) => dictionary[character]
    ).join(' ')
    ).join('   ');
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
        })
    .join(''))
    .join(' ');
    return word;
}

export { translateToMorse, translateToEnglish };


