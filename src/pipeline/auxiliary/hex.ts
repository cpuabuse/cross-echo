/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Hexadecimal value replacement.
 */

import { arrayOfHexNumbers, emptyString } from "../../defaults";

/**
 * A function that replaces hexadecimal value with whatever its value is in the ASCII table.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceHexCharacters(text: string): Buffer {
	let separator: string = "\\x";
	let arrayOfNumbers: Array<string> = arrayOfHexNumbers;
	let sentences: Array<string> = text.split(separator);
	let radix: number = 16;
	let numberOfDigits: number = 2;
	return sentences.slice(1).reduce<Buffer>(function (accumulator, sentence) {
		if (sentence.length > 1) {
			let characters: Array<string> = sentence.split(emptyString);
			if (arrayOfNumbers.includes(characters[0]) && arrayOfNumbers.includes(characters[1])) {
				// If we are here, then we replace
				let finalNumber: number = parseInt(sentence.substring(0, numberOfDigits), radix);
				// If there is nothing left in the sentence, then the substring will return an empty string
				return Buffer.concat([
					accumulator,
					Buffer.from([finalNumber]),
					Buffer.from(sentence.substring(numberOfDigits))
				]);
			}
		}
		return Buffer.concat([accumulator, Buffer.from(separator + sentence)]);
	}, Buffer.from(sentences[0]));
}
