/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

import { backslash } from "../../defaults";

/**
 * A literal backslash character ("\").
 */
export function replaceBackslashCharacter(text: string): string {
	return text.split("\\\\").join(backslash);
}
