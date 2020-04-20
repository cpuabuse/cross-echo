/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Carriage return replacement.
 */

import { carriageReturn } from "../../defaults";

/**
 * A function that replaces `\r` with the carriage return character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceCarriageReturnCharacters(text: string): string {
	return text.split("\\r").join(carriageReturn);
}
