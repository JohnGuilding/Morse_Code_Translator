import { translateToMorse, translateToEnglish } from "./translate.js";

////////////////////////////// TRANSLATE ENGLISH FUNCTION //////////////////////////////
const englishForm = document.querySelector(".english-form");
const englishTranslation = document.querySelector(".english-translation");

const submitEnglishBtn = document.querySelector(".submit-english-btn");
submitEnglishBtn.addEventListener("click", () => {
	englishTranslation.innerHTML = "";
	const input = englishForm.morseCode.value;
	englishForm.morseCode.value = "";
	console.log(translateToMorse(input));
	const formattedString = translateToMorse(input).replace('   ', '&nbsp;&nbsp;&nbsp;')
	englishTranslation.innerHTML = formattedString;
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
	const input = morseForm.english.value;
	morseForm.english.value = "";
	morseTranslation.innerHTML = translateToEnglish(input);
});

const refreshMorseTranslation = document.querySelector(".refresh-morse-btn");

refreshMorseTranslation.addEventListener("click", () => {
	morseTranslation.innerHTML = "";
});