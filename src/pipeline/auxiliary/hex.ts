/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Hexadecimal value replacement.
 */

import { arrayOfNumbers } from "../../defaults";

/**
 * A function that replaces hexadecimal value with whatever its value is in the ASCII table.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceHexCharacters(text: string): void {
	let sentences: Array<string> = text.split("\\x");
	sentences.forEach(function (item) {
		let characters: Array<string> = item.split("");
		if (characters.length > 1) {
			if (arrayOfNumbers.includes(characters[0]) && arrayOfNumbers.includes(characters[1])) {
				// If we are here, then we replace
			}
		}
	});
}
