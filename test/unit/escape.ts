/*
	File: test/unit/pipeline/backslash.ts
	cpuabuse.com
*/

/**
 * Tests the backslash flag.
 */

import {
	fruitTable as expectedFruitTable,
	path as expectedPath,
	ringing as expectedRinging
} from "../expected/pipeline";
import { fruitTable as inputFruitTable, path as inputPath, ringing as inputRinging } from "../input/pipeline";
import { alert } from "../../src/pipeline/auxiliary/alert";
import { backslashCharacter } from "../../src/pipeline/auxiliary/backslash";
import { replaceTab } from "../../src/pipeline/auxiliary/tab";
import { strictEqual } from "assert";

/**
 * A test for the bell flag.
 */
export function testEscape(): void {
	// Alert
	describe("ringing", function() {
		it("should replace bell symbol at the end of each ring", function() {
			strictEqual(alert(inputRinging), expectedRinging);
		});
	});

	// Backslash
	describe("backslash", function() {
		describe("path", function() {
			it("should have a single backslash", function() {
				strictEqual(backslashCharacter(inputPath), expectedPath);
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
