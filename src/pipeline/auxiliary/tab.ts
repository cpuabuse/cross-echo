/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 *  Tab replacement.
 */

import { tab } from "../../defaults";

/**
 * It replaces `\t` with tab.
 * @param text String to replace
 */
export function replaceTabCharacter(text: string): string {
	return text.split("\\t").join(tab);
}
