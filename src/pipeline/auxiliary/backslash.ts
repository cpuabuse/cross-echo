/*
	File: src/pipeline/auxiliary/backslash.ts
	cpuabuse.com
*/

import { backslash } from "../../defaults";

/**
 * A literal backslash character ("\").
 */
export function backslashCharacter(text: string): string {
	return text.split("\\\\").join(backslash);
}
