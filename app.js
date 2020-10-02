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

// const morseArray = [
//     {letter: 'a', morse: '.-'},
//     {letter: 'b', morse: '-...'},
//     {letter: 'c', morse: '-.-.'},
//     {letter: 'd', morse: '-..'},
//     {letter: 'e', morse: '.'},
//     {letter: 'f', morse: '..-.'},
//     {letter: 'g', morse: '--.'},
//     {letter: 'h', morse: '....'},
//     {letter: 'i', morse: '..'},
//     {letter: 'j', morse: '.---'},
//     {letter: 'k', morse: '-.-'},
//     {letter: 'l', morse: '.-..'},
//     {letter: 'm', morse: '--'},
//     {letter: 'n', morse: '-.'},
//     {letter: 'o', morse: '---'},
//     {letter: 'p', morse: '.--.'},
//     {letter: 'q', morse: '--.-'},
//     {letter: 'r', morse: '.-.'},
//     {letter: 's', morse: '...'},
//     {letter: 't', morse: '-'},
//     {letter: 'u', morse: '..-'},
//     {letter: 'v', morse: '...-'},
//     {letter: 'w', morse: '.--'},
//     {letter: 'x', morse: '-..-'},
//     {letter: 'y', morse: '-.--'},
//     {letter: 'z', morse: '--..'},
//     {letter: ' ', morse: ' '}
// ];

const morseArray = [
    {'a' : '.-'},
    {'b' : '-...'},
    {'c' : '-.-.'},
    {'d' : '-..'},
    {'e' : '.'},
    {'f' : '..-.'},
    {'g' : '--.'},
    {'h' : '....'},
    {'i' : '..'},
    {'j' : '.---'},
    {'k' : '-.-'},
    {'l' : '.-..'},
    {'m' : '--'},
    {'n' : '-.'},
    {'o' : '---'},
    {'p' : '.--.'},
    {'q' : '--.-'},
    {'r' : '.-.'},
    {'s' : '...'},
    {'t' : '-'},
    {'u' : '..-'},
    {'v' : '...-'},
    {'w' : '.--'},
    {'x' : '-..-'},
    {'y' : '-.--'},
    {'z' : '--..'},
    {' ' : ' '}
];

// console.log(morseArray);

// console.log(Object.entries(morseArray));


const translation = document.querySelector('.translation');

////////////////////////////// TRANSLATE FUNCTION //////////////////////////////

// GET USER INPUT FROM FORM //
const getValue = () => {
    const form = document.querySelector("form");
    output = form.morseCode.value;

    // SETS INPUT TO ARRAY AND SPLITS STRING WITH SPREAD SYNTAX //
    const inputArray = [...output];

    // IF INPUT CHARACTERS MATCH LETTERS ARRAY DO SOMETHING... //
    morseArray.forEach((objectIteration) => {
        // const lettersArray = Object.keys(letter);

        Object.entries(objectIteration).forEach(([key, value]) => {
            // console.log(`${key}: ${value}`);
            // return key;

            inputArray.forEach((inputLetter) => {
                if (inputLetter == key) {
                
                    // String(value);
                    console.log(typeof value);
                    translation.innerHTML += '  ' + value;
                    
                }
            });

        });


        
    });
}

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

