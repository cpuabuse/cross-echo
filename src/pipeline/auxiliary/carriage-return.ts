/*
    Copyright 2020 cpuabuse.com
    Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

import { carriageReturn } from "../../defaults";

/**
 * A literal carriage return character.
 */
export function replaceCarriageReturnCharacter(text: string): string {
	return text.split("\\r").join(carriageReturn);
}
