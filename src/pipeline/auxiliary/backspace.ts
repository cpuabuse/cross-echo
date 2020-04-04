/*
	File: src/pipeline/auxiliary/backspace.ts
	cpuabuse.com
*/

import { backspace } from "../../defaults";

/**
 * Backspace.
 */
export function backspaceCharacter(text: string): string {
	return text.split("\\b").join(backspace);
}
