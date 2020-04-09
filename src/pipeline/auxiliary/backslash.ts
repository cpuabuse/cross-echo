/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Backslash replacement.
 */

import { backslash } from "../../defaults";

/**
 * A function that replaces `\` with the backslash character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceBackslashCharacter(text: string): string {
	return text.split("\\\\").join(backslash);
}
