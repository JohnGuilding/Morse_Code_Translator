

////////////////////////////// LETTERS AND MORSE CODE ARRAYS //////////////////////////////


const englishArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];

const morseArray = ['.-', '-...', '-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----', ' '];


////////////////////////////// TRANSLATE ENGLISH FUNCTION //////////////////////////////


const englishForm = document.querySelector(".english-form");
const submitEnglishBtn = document.querySelector(".submit-english-btn");
const englishTranslation = document.querySelector('.english-translation');

// 0. Add eventListener to submit btn //
submitEnglishBtn.addEventListener('click', () => {
    // 1. InnerHTML set to empty //
    englishTranslation.innerHTML = '';

    // 2. setting variable to form output //
    const output = englishForm.morseCode.value;

    // 3. Splitting array into individual letters //
    const inputArray = [...output];

    // 4. Iterating over each input letter //
    inputArray.forEach((inputLetter) => {

        // 5. Iterating over english array and checking if each input letter is equal to a englishArray letter //
        englishArray.forEach((arrayLetter) => {
            if (inputLetter == arrayLetter) {

                // 6. If true, iterate over morseArray and for morse code with same array index as english letter, prepend to innerHTML //
                morseArray.forEach((arrayMorse) => {
                    if (morseArray.indexOf(arrayMorse) == englishArray.indexOf(arrayLetter)) {
                        englishTranslation.innerHTML += ' ' + arrayMorse;
                    }
                });
            }
        });
    });
});

// Refresh translation function //
refreshEnglishTranslation = document.querySelector('.refresh-english-btn');

refreshEnglishTranslation.addEventListener('click', () => {
    englishTranslation.innerHTML = '';
});


////////////////////////////// TRANSLATE MORSE FUNCTION //////////////////////////////


const morseForm = document.querySelector(".morse-form");
const submitMorseBtn = document.querySelector(".submit-morse-btn");
const morseTranslation = document.querySelector('.morse-translation');

// 0. Add eventListener to submit btn //
submitMorseBtn.addEventListener('click', () => {
    // 1. InnerHTML set to empty //
    morseTranslation.innerHTML = '';

    // 2. setting variable to form output //
    const output = morseForm.morseCode.value;

    // 3. Splitting array into individual morse code segments //
    const inputArray = output.split(' ')

    // 4. Iterating over each morse code segment //
    inputArray.forEach((inputLetter) => {

        // 5. Iterating over morse array and checking if each input is equal to a morseArray element //
        morseArray.forEach((arraySymbol) => {
            if (inputLetter == arraySymbol) {
                console.log(morseArray.indexOf(arraySymbol));

                // 6. If true, iterate over englishArray and for letter with same array index as morse element, prepend to innerHTML //
                englishArray.forEach((arrayLetter) => {
                    if (englishArray.indexOf(arrayLetter) == morseArray.indexOf(arraySymbol)) {
                        console.log(arrayLetter);
                        morseTranslation.innerHTML += arrayLetter;
                    }
                });
            }
        });
    });
});

// Refresh translation function //
refreshMorseTranslation = document.querySelector('.refresh-morse-btn');

refreshMorseTranslation.addEventListener('click', () => {
    morseTranslation.innerHTML = '';
});
