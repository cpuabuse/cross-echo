/*
	File: src/pipeline/auxiliary/alert.ts
	cpuabuse.com
*/

import { bell } from "../../defaults";

/**
 * An alert (The BELL character).
 */
export function alert(text: string): string {
	return text.split("\\a").join(bell);
}
