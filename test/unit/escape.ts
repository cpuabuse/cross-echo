/*
    Copyright 2020 cpuabuse.com
    Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Tests the backslash flag.
 */

import {
	animals as expectedBackspace,
	planets as expectedCarriageReturn,
	fruitTable as expectedFruitTable,
	path as expectedPath,
	ringing as expectedRinging
} from "../expected/pipeline";
import {
	animals as inputBackspace,
	fruitTable as inputFruitTable,
	path as inputPath,
	ringing as inputRinging,
	planets as inputcarriageReturn
} from "../input/pipeline";
import { alert } from "../../src/pipeline/auxiliary/alert";
import { backslashCharacter } from "../../src/pipeline/auxiliary/backslash";
import { backspaceCharacter } from "../../src/pipeline/auxiliary/backspace";
import { carriageReturnCharacter } from "../../src/pipeline/auxiliary/carriage-return";
import { replaceTab } from "../../src/pipeline/auxiliary/tab";
import { strictEqual } from "assert";

/**
 * A test for the bell flag.
 */
export function testEscape(): void {
	// Alert
	describe("alert", function() {
		describe("ringing", function() {
			it("should replace bell symbol at the end of each ring", function() {
				strictEqual(alert(inputRinging), expectedRinging);
			});
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

	// Backspace
	describe("backspace", function() {
		describe("animals", function() {
			it("should replace backspace symbol", function() {
				strictEqual(backspaceCharacter(inputBackspace), expectedBackspace);
			});
		});
	});

	// Carriage return
	describe("carriage return", function() {
		describe("planets", function() {
			it("should replace carriage return symbol", function() {
				strictEqual(carriageReturnCharacter(inputcarriageReturn), expectedCarriageReturn);
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
