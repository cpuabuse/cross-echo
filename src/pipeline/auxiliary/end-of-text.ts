/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * End of text replacement.
 */

/**
 * A function that replaces `\c` with the end of text character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceEndOfTextCharacters(text: string): string {
	return text.split("\\c")[0];
}
