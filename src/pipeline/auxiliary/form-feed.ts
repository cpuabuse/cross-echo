/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Form feed replacement.
 */

import { formFeed } from "../../defaults";

/**
 * A function that replaces `\f` with the form feed character.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function replaceFormFeedCharacter(text: string): string {
	return text.split("\\f").join(formFeed);
}
