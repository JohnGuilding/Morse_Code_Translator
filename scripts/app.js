import { translateToMorse, translateToEnglish } from "./translate.js";

const englishForm = document.querySelector(".english-form");
const submitEnglishBtn = document.querySelector(".submit-english-btn");
const englishOutput = document.querySelector(".english-output");
const englishTranslation = document.querySelector(".english-translation");
const refreshEnglishTranslation = document.querySelector(".refresh-english-btn");

const morseForm = document.querySelector(".morse-form");
const submitMorseBtn = document.querySelector(".submit-morse-btn");
const morseOutput = document.querySelector(".morse-output");
const morseTranslation = document.querySelector(".morse-translation");
const refreshMorseTranslation = document.querySelector(".refresh-morse-btn");

/// ANIMATION FUNCTION ///
const animate = (event) => {
    switch (event.target.getAttribute("data-name")) {
        case "openEnglish":
            englishForm.classList.add("animate");
            break;
        case "openMorse":
            morseForm.classList.add("animate");
            break;
        case "translateEnglish":
            englishOutput.classList.add("animate");
            break;
        case "translateMorse":
            morseOutput.classList.add("animate");
            break;
    }
}

/// TRANSLATE ENGLISH FUNCTION ///
const getEnglishTranslation = () => {
    const input = englishForm.morseCode.value;
    englishForm.morseCode.value = "";
    const formattedString = translateToMorse(input).split('   ').join('&nbsp;&nbsp;&nbsp;');
	englishTranslation.innerHTML = formattedString;
}

refreshEnglishTranslation.addEventListener("click", () => {
    englishTranslation.innerHTML = "";
});

/// TRANSLATE MORSE FUNCTION ///
const getMorseTranslation = () => {
    const input = morseForm.english.value;
    morseForm.english.value = "";
    morseTranslation.innerHTML = translateToEnglish(input);
}

refreshMorseTranslation.addEventListener("click", () => {
    morseTranslation.innerHTML = "";
});


document.addEventListener("click", animate);
submitEnglishBtn.addEventListener("click", getEnglishTranslation)
submitMorseBtn.addEventListener("click", getMorseTranslation)
