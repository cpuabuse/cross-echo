/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Alert replacement.
 */

import { alert } from "../../defaults";

/**
 * A function that replaces `\a` with the alert character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceAlertCharacter(text: string): string {
	return text.split("\\a").join(alert);
}
