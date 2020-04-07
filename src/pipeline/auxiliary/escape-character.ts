/*
    Copyright 2020 cpuabuse.com
    Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

import { escapeChar } from "../../defaults";

/**
 * The escape character; equivalent to pressing the escape key.
 */
export function replaceEscapeCharacter(text: string): string {
	return text.split("\\e").join(escapeChar);
}
