/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Performs a series of unit tests.
 */

import { testEscape } from "./enable-backslash";
import { testNoTraillingNewline } from "./no-trailing-newline";

/**
 * Unit test for pipeline functions.
 */
export function testUnit(): void {
	describe("unit", function() {
		testEscape(); // eslint-disable-line mocha/no-setup-in-describe
		testNoTraillingNewline(); // eslint-disable-line mocha/no-setup-in-describe
	});
}
