/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

import { backslash } from "../defaults";
import { replaceAlertCharacters } from "./auxiliary/alert";
import { replaceBackspaceCharacters } from "./auxiliary/backspace";
import { replaceCarriageReturnCharacters } from "./auxiliary/carriage-return";
import { replaceEscapeCharacters } from "./auxiliary/escape";
import { replaceFormFeedCharacters } from "./auxiliary/form-feed";
import { replaceHexCharacters } from "./auxiliary/hex";
import { replaceNewlineCharacters } from "./auxiliary/newline";
import { replaceTabCharacters } from "./auxiliary/tab";
import { replaceVerticalTabCharacters } from "./auxiliary/vertical-tab";

/**
 * Enable interpretation of backslash escapes.
 *
 * At first we replace the backslash, and then everything else.
 */
export function enableBackslash(text: string): Buffer {
	const backslashBuffer: Buffer = Buffer.from([backslash]);

	return Buffer.concat([
		...(function* (): Generator<Buffer, void, void> {
			const sentences: Array<string> = text.split("\\\\");
			for (const [index, sentence] of sentences.entries()) {
				// Replacement stage
				let result: string = sentence;
				result = replaceBackspaceCharacters(result);
				result = replaceAlertCharacters(result);
				result = replaceCarriageReturnCharacters(result);
				result = replaceEscapeCharacters(result);
				result = replaceFormFeedCharacters(result);
				result = replaceNewlineCharacters(result);
				result = replaceTabCharacters(result);
				result = replaceVerticalTabCharacters(result);

				// Buffer stage
				let buffer: Buffer = replaceHexCharacters(result);

				// Yield
				yield buffer;
				if (index + 1 < sentences.length) {
					yield backslashBuffer;
				}
			}
		})()
	]);
}
