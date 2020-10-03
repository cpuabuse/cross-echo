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
 * Numbers to be tested for hexadecimal values.
 */
export const hexArrayOfDigits: Array<string> = "0123456789abcdefABCDEF".split(emptyString);

/**
 * Literally the separator for hexadecimal values.
 */
export const hexSeparator: string = "\\x";

/**
 * Max number of digits for hexadecimal values.
 */
export const hexMaxNumberOfDigits: number = 2;

/**
 * Hexadecimal radix.
 */
export const hexRadix: number = 16;

/**
 * Numbers to be tested for octal values.
 */
export const octArrayOfDigits: Array<string> = "01234567".split(emptyString);

/**
 * Literally the separator for octal values.
 */
export const octSeparator: string = "\\0";

/**
 * Max number of digits for octal values.
 */
export const octMaxNumberOfDigits: number = 3;

/**
 * Octal radix.
 */
export const octRadix: number = 8;

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
 * The newline character.
 */
export const newline: string = String.fromCharCode(newlineNumber);
