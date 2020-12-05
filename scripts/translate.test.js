const { expect } = require("@jest/globals");

import { translateToMorse, translateToEnglish } from "./translate";

// Valid inputs
it ('should be 1', () => {
    expect(1).toBe(1);
});

it('should translate to .-', () => {
    const translation = translateToMorse('A')
    expect(translation).toBe('.-')
});

it('should translate to .... . .-.. .-.. ---   .-- --- .-. .-.. -..', () => {
    const translation = translateToMorse('hello world')
    expect(translation).toBe('.... . .-.. .-.. ---   .-- --- .-. .-.. -..')
});

it('should translate to .... --- .--   -- ..- -.-. ....   .-- --- --- -..   .-- --- ..- .-.. -..   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. .... ..- -.-. -.-   .. ..-.   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. --- ..- .-.. -..   -.-. .... ..- -.-. -.-   .-- --- --- -..', () => {
    const translation = translateToMorse('how much wood would a woodchuck chuck if a woodchuck could chuck wood')
    expect(translation).toBe('.... --- .--   -- ..- -.-. ....   .-- --- --- -..   .-- --- ..- .-.. -..   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. .... ..- -.-. -.-   .. ..-.   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. --- ..- .-.. -..   -.-. .... ..- -.-. -.-   .-- --- --- -..')
});

it('should translate to a', () => {
    const translation = translateToEnglish('.-')
    expect(translation).toBe('a')
});

it('should translate to hello world', () => {
    const translation = translateToEnglish('.... . .-.. .-.. ---   .-- --- .-. .-.. -..')
    expect(translation).toBe('hello world')
});

// Invalid inputs

// Null/no inputs