/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * End of text replacement.
 */

import { endOfText } from "../../defaults";

/**
 * A function that replaces `\c` with the end of text character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceEndOfTextCharacter(text: string): string {
	return text.split("\\c").join(endOfText);
}
