import { englishArray, morseArray } from "./data.js";

const englishForm = document.querySelector(".english-form");
const englishTranslation = document.querySelector(".english-translation");

const translateEnglish = () => {
	englishTranslation.innerHTML = "";

	const output = englishForm.morseCode.value;
	
	const inputArray = [...output];
	
	inputArray.forEach((inputLetter) => {
		englishArray.forEach((arrayLetter) => {
			if (inputLetter == arrayLetter) {
				morseArray.forEach((arrayMorse) => {
					if (
						morseArray.indexOf(arrayMorse) == englishArray.indexOf(arrayLetter)
					) {
						englishTranslation.innerHTML += " " + arrayMorse;
					}
				});
			}
		});
	});
}

const morseTranslation = document.querySelector(".morse-translation");
const morseForm = document.querySelector(".morse-form");

const translateMorse = () => {
        morseTranslation.innerHTML = "";
    
        const output = morseForm.morseCode.value;
    
        const inputArray = output.split(" ");
    
        inputArray.forEach((inputLetter) => {
            morseArray.forEach((arraySymbol) => {
                if (inputLetter == arraySymbol) {
                    console.log(morseArray.indexOf(arraySymbol));
    
                    englishArray.forEach((arrayLetter) => {
                        if (
                            englishArray.indexOf(arrayLetter) == morseArray.indexOf(arraySymbol)
                        ) {
                            console.log(arrayLetter);
                            morseTranslation.innerHTML += arrayLetter;
                        }
                    });
                }
            });
        });
}

export { translateEnglish, translateMorse };