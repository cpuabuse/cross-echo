/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Vertical tab replacement.
 */

import { verticalTab } from "../../defaults";

/**
 * It replaces `\v` with vertical tab.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceVerticalTabCharacter(text: string): string {
	return text.split("\\v").join(verticalTab);
}
