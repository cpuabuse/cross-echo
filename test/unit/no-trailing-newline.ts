/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Performs tests for no trailing new line flag.
 */

import { ok } from "assert";

/**
 * Test for `noTraillingNewline`.
 */
export function testNoTraillingNewline(): void {
	describe("noTraillingNewline", function() {
		describe("dummy test", function() {
			it("should pass", function() {
				ok(true);
			});
		});
	});
}
