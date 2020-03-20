/*
	File: test/unit/pipeline/backslash.ts
	cpuabuse.com
*/

/**
 * Tests the backslash flag.
 */

import { backslashCharacter } from "../../../src/pipeline/auxiliary/backslash";
import { path as expected } from "../../expected/pipeline";
import { path as input } from "../../input/pipeline";
import { strictEqual } from "assert";

/**
 * A test for the bell flag.
 */
export function testBackslash(): void {
	describe("path", function() {
		it("should have a single backslash", function() {
			strictEqual(backslashCharacter(input), expected);
		});
	});
}

testBackslash();
