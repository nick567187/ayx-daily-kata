export function stringReverse(str: string) {
    if (typeof str !== 'string') throw new Error('input is not of type string');

    const reversed = str.split('');
    for (let i = 0; i < Math.floor(reversed.length/2); i++) {
        const opposite = reversed.length - 1 - i;
        const temp = reversed[i];
        reversed[i] = reversed[opposite];
        reversed[opposite] = temp;
    }

    return reversed.join('');
}