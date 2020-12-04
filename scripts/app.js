import { translateToMorse, translateToEnglish } from "./translate.js";


////////////////////////////// TRANSLATE ENGLISH FUNCTION //////////////////////////////
const englishForm = document.querySelector(".english-form");
const englishTranslation = document.querySelector(".english-translation");

const submitEnglishBtn = document.querySelector(".submit-english-btn");
submitEnglishBtn.addEventListener("click", () => {
	englishTranslation.innerHTML = "";
	const input = englishForm.morseCode.value;
	englishTranslation.innerHTML = translateToMorse(input);
});

const refreshEnglishTranslation = document.querySelector(".refresh-english-btn");
refreshEnglishTranslation.addEventListener("click", () => {
	englishTranslation.innerHTML = "";
});

////////////////////////////// TRANSLATE MORSE FUNCTION //////////////////////////////
const morseTranslation = document.querySelector(".morse-translation");
const morseForm = document.querySelector(".morse-form");

const submitMorseBtn = document.querySelector(".submit-morse-btn");
submitMorseBtn.addEventListener("click", () => {
	morseTranslation.innerHTML = "";
	const input = morseForm.morseCode.value;
	morseTranslation.innerHTML = translateToEnglish(input);
});

const refreshMorseTranslation = document.querySelector(".refresh-morse-btn");

refreshMorseTranslation.addEventListener("click", () => {
	morseTranslation.innerHTML = "";
});