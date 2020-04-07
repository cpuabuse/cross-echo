/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

import { backspace } from "../../defaults";

/**
 * Backspace.
 */
export function replaceBackspaceCharacter(text: string): string {
	return text.split("\\b").join(backspace);
}
