/*
	File: test/unit/pipeline/alert.ts
	cpuabuse.com
*/

/**
 * Tests the bell flag.
 */

import { alert } from "../../../src/pipeline/auxiliary/alert";
import { ringing as expected } from "../../expected/pipeline";
import { ringing as input } from "../../input/pipeline";
import { strictEqual } from "assert";

/**
 * A test for the bell flag.
 */
export function testAlert(): void {
	describe("ringing", function() {
		it("should replace bell symbol at the end of each ring", function() {
			strictEqual(alert(input), expected);
		});
	});
}

testAlert();
