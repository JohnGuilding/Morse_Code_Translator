// You’re tasked with creating a website that can translate between english and morse code.
// As an extension it should be able to translate both ways.

// 1. store alphabet
// 2. sotre morse code
// 3. listener on the btn listening for the click
// 4. ON CLICK -> run a function -> convert english to morse
// 5. 'convert english to morse' -> get the letter and find the corresponding morse
// 6. a) creat 2 arrays -> one with the letters of the alphabet -> 2 with morse
//    b) array of objects vs array of strings
//    c) objects with key value pairs
// 7. display the result
// 8. refresh button with event listener

const translation = document.querySelector('.translation');

// get value 
const getValue = () => {
    let form = document.querySelector("form");
    output = form.morseCode.value;

    let lettersArray = [...output];
    lettersArray.forEach((letter) => {

    });
}


const morseArray = [
    {letter: 'a', morse: '.-'},
    {letter: 'b', morse: '-...'},
    {letter: 'c', morse: '-.-.'},
    {letter: 'd', morse: '-..'},
    {letter: 'e', morse: '.'},
    {letter: 'f', morse: '..-.'},
    {letter: 'g', morse: '--.'},
    {letter: 'h', morse: '....'},
    {letter: 'i', morse: '..'},
    {letter: 'j', morse: '.---'},
    {letter: 'k', morse: '-.-'},
    {letter: 'l', morse: '.-..'},
    {letter: 'm', morse: '--'},
    {letter: 'n', morse: '-.'},
    {letter: 'o', morse: '---'},
    {letter: 'p', morse: '.--.'},
    {letter: 'q', morse: '--.-'},
    {letter: 'r', morse: '.-.'},
    {letter: 's', morse: '...'},
    {letter: 't', morse: '-'},
    {letter: 'u', morse: '..-'},
    {letter: 'v', morse: '...-'},
    {letter: 'w', morse: '.--'},
    {letter: 'x', morse: '-..-'},
    {letter: 'y', morse: '-.--'},
    {letter: 'z', morse: '--..'},
    {letter: ' ', morse: ' '}
];
