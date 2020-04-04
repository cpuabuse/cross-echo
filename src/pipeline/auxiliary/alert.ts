/*
    Copyright 2020 cpuabuse.com
    Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

import { bell } from "../../defaults";

/**
 * An alert (The BELL character).
 */
export function alert(text: string): string {
	return text.split("\\a").join(bell);
}
