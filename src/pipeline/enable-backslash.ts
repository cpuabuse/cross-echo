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
import { replaceTabCharacters } from "./auxiliary/tab";
import { replaceVerticalTabCharacters } from "./auxiliary/vertical-tab";

/**
 * Enable interpretation of backslash escapes.
 */
export function enableBackslash(text: string): string {
	return text
		.split("\\\\")
		.map(function(subtext) {
			let result: string = subtext;
			result = replaceAlertCharacters(result);
			result = replaceBackspaceCharacters(result);
			result = replaceCarriageReturnCharacters(result);
			result = replaceEscapeCharacters(result);
			result = replaceFormFeedCharacters(result);
			result = replaceTabCharacters(result);
			result = replaceVerticalTabCharacters(result);
			return result;
		})
		.join(backslash);
}
