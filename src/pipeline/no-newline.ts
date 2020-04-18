/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Do not output the trailing newline.
 */
export function noTrailingNewline(text: string): string {
	return text
		.split("\n")
		.join("")
		.split("\r")
		.join("");
}
