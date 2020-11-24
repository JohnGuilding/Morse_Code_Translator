import { translateEnglish, translateMorse } from "./translate.js";

////////////////////////////// TRANSLATE ENGLISH FUNCTION //////////////////////////////
const submitEnglishBtn = document.querySelector(".submit-english-btn");
submitEnglishBtn.addEventListener("click", () => {
	translateEnglish();
});

const refreshEnglishTranslation = document.querySelector(".refresh-english-btn");

refreshEnglishTranslation.addEventListener("click", () => {
	englishTranslation.innerHTML = "";
});


////////////////////////////// TRANSLATE MORSE FUNCTION //////////////////////////////
const submitMorseBtn = document.querySelector(".submit-morse-btn");
submitMorseBtn.addEventListener("click", () => {
	translateMorse();
});

const refreshMorseTranslation = document.querySelector(".refresh-morse-btn");

refreshMorseTranslation.addEventListener("click", () => {
	morseTranslation.innerHTML = "";
});
