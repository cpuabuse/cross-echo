/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Escape replacement.
 */

import { escape } from "../../defaults";

/**
 * A function that replaces `\e` with the escape character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceEscapeCharacter(text: string): string {
	return text.split("\\e").join(escape);
}
