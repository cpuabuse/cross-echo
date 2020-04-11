/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Newline replacement.
 */

import { newline } from "../../defaults";

/**
 * A function that replaces `\n` with the newline character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replacenewlineCharacter(text: string): string {
	return text.split("\\n").join(newline);
}
