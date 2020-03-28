/*
	File: test/unit/pipeline/backslash.ts
	cpuabuse.com
*/

/**
 * Tests the backslash flag.
 */

import { path as expected, fruitTable as expectedFruitTable } from "../../expected/pipeline";
import { path as input, fruitTable as inputFruitTable } from "../../input/pipeline";
import { backslashCharacter } from "../../../src/pipeline/auxiliary/backslash";
import { replaceTab } from "../../../src/pipeline/auxiliary/tab";
import { strictEqual } from "assert";

/**
 * A test for the bell flag.
 */
export function testEscape(): void {
	// Backslash
	describe("backslash", function() {
		describe("path", function() {
			it("should have a single backslash", function() {
				strictEqual(backslashCharacter(input), expected);
			});
		});
	});

	// Tab
	describe("tab", function() {
		describe("fruitTable", function() {
			it("should have tables", function() {
				strictEqual(replaceTab(inputFruitTable), expectedFruitTable);
			});
		});
	});
}

testEscape();
