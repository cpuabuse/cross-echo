/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Performs a series of unit tests for the backslash-escaped characters.
 */

import {
	animals as expectedBackspace,
	planets as expectedCarriageReturn,
	countries as expectedCountries,
	fruitTable as expectedFruitTable,
	path as expectedPath,
	ringing as expectedRinging,
	snakes as expectedSnakes
} from "../expected/pipeline";
import {
	animals as inputBackspace,
	planets as inputCarriageReturn,
	countries as inputCountries,
	fruitTable as inputFruitTable,
	path as inputPath,
	ringing as inputRinging,
	snakes as inputSnakes
} from "../input/pipeline";
import { replaceAlertCharacter } from "../../src/pipeline/auxiliary/alert";
import { replaceBackslashCharacter } from "../../src/pipeline/auxiliary/backslash";
import { replaceBackspaceCharacter } from "../../src/pipeline/auxiliary/backspace";
import { replaceCarriageReturnCharacter } from "../../src/pipeline/auxiliary/carriage-return";
import { replaceEscapeCharacter } from "../../src/pipeline/auxiliary/escape-character";
import { replaceFormFeedCharacter } from "../../src/pipeline/auxiliary/form-feed";
import { replaceTabCharacter } from "../../src/pipeline/auxiliary/tab";
import { strictEqual } from "assert";

/**
 * All of the unit tests for the backslash-escaped characters.
 */
export function testEscape(): void {
	describe("escape", function() {
		// Alert
		describe("alert", function() {
			describe("ringing", function() {
				it("should replace alert symbol at the end of each ring", function() {
					strictEqual(replaceAlertCharacter(inputRinging), expectedRinging);
				});
			});
		});

		// Backslash
		describe("backslash", function() {
			describe("path", function() {
				it("should have a single backslash", function() {
					strictEqual(replaceBackslashCharacter(inputPath), expectedPath);
				});
			});
		});

		// Backspace
		describe("backspace", function() {
			describe("animals", function() {
				it("should replace backspace symbol", function() {
					strictEqual(replaceBackspaceCharacter(inputBackspace), expectedBackspace);
				});
			});
		});

		// Carriage return
		describe("carriage return", function() {
			describe("planets", function() {
				it("should replace carriage return symbol", function() {
					strictEqual(replaceCarriageReturnCharacter(inputCarriageReturn), expectedCarriageReturn);
				});
			});
		});

		// Escape character
		describe("escape", function() {
			describe("snakes", function() {
				it("should replace escape character symbol", function() {
					strictEqual(replaceEscapeCharacter(inputSnakes), expectedSnakes);
				});
			});
		});

		// Form feed
		describe("formFeed", function() {
			describe("countries", function() {
				it("should replace form feed character symbol", function() {
					strictEqual(replaceFormFeedCharacter(inputCountries), expectedCountries);
				});
			});
		});

		// Tab
		describe("tab", function() {
			describe("fruitTable", function() {
				it("should have tables", function() {
					strictEqual(replaceTabCharacter(inputFruitTable), expectedFruitTable);
				});
			});
		});
	});
}
