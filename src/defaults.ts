/*
	File: src/defaults.ts
	cpuabuse.com
*/

/**
 * A file containing all the variables and constants.
 */

// Not sorted because dependent
/**
 * ASCII number for bell character.
 */
const bellNumber: number = 7;

/**
 * ASCII number for backslash character.
 */
const backslashNumber: number = 92;

/**
 * ASCII number for a tab character.
 */
const tabNumber: number = 9;

/**
 * The bell character.
 */
export const bell: string = String.fromCharCode(bellNumber);

/**
 * The backslash character.
 */
export const backslash: string = String.fromCharCode(backslashNumber);

/**
 * The tab character.
 */
export const tab: string = String.fromCharCode(tabNumber);
