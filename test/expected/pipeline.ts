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
 * A sequence of rings with the bell character.
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
 * Fruit table with tabs.
 */
export const fruitTable: string = `Name	Weight	Color
Orange	200	Orange
Apple	250	Red`;
