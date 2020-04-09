/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Provide the expected data.
 */

/**
 * A directory path with a backslash.
 */
export const path: string = "C:\\";

/**
 * A list of animals with backspaces between them.
 */
export const animals: string = `Lion\u0008Tiger\u0008Dog\u0008`;

/**
 * A sequence of rings with the alert character.
 */
export const ringing: string = `Ring\u0007
Ring\u0007
Ring\u0007`;

/**
 * A list of planets with carriage returns.
 */
export const planets: string = `Earth\u000DVenus\u000DJupiter\u000D`;

/**
 * A list of snakes with the command escaped.
 */
export const snakes: string = `Ball python\u001B00Anaconda`;

/**
 * A list of countries with form feed.
 */
export const countries: string = `Colombia\u000CMadagascar\u000CEgypt`;

/**
 * Fruit table with tabs.
 */
export const fruitTable: string = `Name	Weight	Color
Orange	200	Orange
Apple	250	Red`;

/**
 * List of beverages with vertical tabs.
 */
export const beverages: string = `Whiskey\u000BVodka\u000BCola`;
