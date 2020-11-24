const { expect } = require("@jest/globals");

import { translateEnglish } from "./translate";

// Valid inputs
it ('should be 1', () => {
    expect(1).toBe(1);
});

it('should translate to .-', () => {
    const translation = translateEnglish('a')
    expect(translation).toBe('.-')
})

// it('should translate a to .-', () => {
//     const translation = translateToMorse('a');
//     expect(translation).toBe('.-')
// })
// Invalid inputs
// Null/no inputs