/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

import { formFeed } from "../../defaults";

/**
 * A form feed character.
 */
export function replaceFormFeedCharacter(text: string): string {
	return text.split("\\f").join(formFeed);
}
