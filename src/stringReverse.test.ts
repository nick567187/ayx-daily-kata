import { stringReverse } from './stringReverse';

describe('stringReverse', () => {
    let input: any;

    function reverseString(str: string) {
        return input.split('').reverse().join('');
    }

    it('should error if given non strings', () => {
        input = [undefined, null, {}, 234]
        const err = new Error('input is not of type string');
        for (const ele of input) {
            expect(() => stringReverse(ele)).toThrow(err)
        }
    });

    it('should reverse a string with even length chars', () => {
        input = 'abcd';
        expect(stringReverse(input)).toEqual(reverseString(input));
    });

    it('should reverse a string with odd length chars', () => {
        input = 'abc';
        expect(stringReverse(input)).toEqual(reverseString(input));
    });

    it('should reverse a string with one char', () => {
        input = 'a';
        expect(stringReverse(input)).toEqual(reverseString(input));
    });
});