/*
Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * A file containing all the variables and constants.
 */

/**
 * Literally an empty string.
 */
export const emptyString: string = "";

/**
 * Literally a space character.
 */
export const spaceString: string = " ";

/**
 * ASCII number for the end of text character.
 */
const endOfTextNumber: number = 3;

/**
 * ASCII number for the alert(bell) character.
 */
const alertNumber: number = 7;

/**
 * ASCII number for backspace character.
 */
const backspaceNumber: number = 8;

/**
 * ASCII number for tab character.
 */
const tabNumber: number = 9;

/**
 * ASCII number for new line.
 */
const newlineNumber: number = 10;

/**
 * ASCII number for vertical tab character.
 */
const verticalTabNumber: number = 11;

/**
 * ASCII number for the form feed character.
 */
const formFeedNumber: number = 12;

/**
 * ASCII number for carriage return character.
 */
const carriageReturnNumber: number = 13;

/**
 * ASCII number for the escape character(ESC key).
 */
const escapeNumber: number = 27;

/**
 * ASCII number for backslash character.
 */
const backslashNumber: number = 92;

/**
 * Numbers to be tested for hexadecimal values.
 */
export const arrayOfNumbers: Array<string> = "0123456789".split(emptyString);

/**
 * The backslash character.
 */
export const backslash: string = String.fromCharCode(backslashNumber);

/**
 * The backspace character.
 */
export const backspace: string = String.fromCharCode(backspaceNumber);

/**
 * The alert character.
 */
export const alert: string = String.fromCharCode(alertNumber);

/**
 * The carriage return character.
 */
export const carriageReturn: string = String.fromCharCode(carriageReturnNumber);

/**
 * The escape character.
 */
export const escape: string = String.fromCharCode(escapeNumber);

/**
 * The form feed character.
 */
export const formFeed: string = String.fromCharCode(formFeedNumber);

/**
 * The tab character.
 */
export const tab: string = String.fromCharCode(tabNumber);

/**
 * The vertical tab character.
 */
export const verticalTab: string = String.fromCharCode(verticalTabNumber);

/**
 * The end of text character.
 */
export const endOfText: string = String.fromCharCode(endOfTextNumber);

/**
 * The newline character.
 */
export const newline: string = String.fromCharCode(newlineNumber);
