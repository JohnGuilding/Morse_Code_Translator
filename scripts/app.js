import { translateToMorse, translateToEnglish } from "./translate.js";

const englishForm = document.querySelector(".english-form");
const englishTranslation = document.querySelector(".english-translation");
const submitEnglishBtn = document.querySelector(".submit-english-btn");
const refreshEnglishTranslation = document.querySelector(".refresh-english-btn");

const morseTranslation = document.querySelector(".morse-translation");
const morseForm = document.querySelector(".morse-form");
const submitMorseBtn = document.querySelector(".submit-morse-btn");
const refreshMorseTranslation = document.querySelector(".refresh-morse-btn");

////////////////////////////// TRANSLATE ENGLISH FUNCTION //////////////////////////////
submitEnglishBtn.addEventListener("click", () => {
	const input = englishForm.morseCode.value;
	englishForm.morseCode.value = "";
	const formattedString = translateToMorse(input).replace('   ', '&nbsp;&nbsp;&nbsp;')
	englishTranslation.innerHTML = formattedString;
});

refreshEnglishTranslation.addEventListener("click", () => {
	englishTranslation.innerHTML = "";
});

////////////////////////////// TRANSLATE MORSE FUNCTION //////////////////////////////
submitMorseBtn.addEventListener("click", () => {
	const input = morseForm.english.value;
	morseForm.english.value = "";
	morseTranslation.innerHTML = translateToEnglish(input);
});

refreshMorseTranslation.addEventListener("click", () => {
	morseTranslation.innerHTML = "";
});