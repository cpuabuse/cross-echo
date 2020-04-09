/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Backspace replacement.
 */

import { backspace } from "../../defaults";

/**
 * A function that replaces `\b` with the backspace character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceBackspaceCharacter(text: string): string {
	return text.split("\\b").join(backspace);
}
