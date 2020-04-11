/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Performs a series of unit tests for the backslash-escaped characters.
 */

import {
	animals as expectedAnimals,
	beverages as expectedBeverages,
	countries as expectedCountries,
	fruitTable as expectedFruitTable,
	junkFood as expectedJunkFood,
	martialArts as expectedMartialArts,
	path as expectedPath,
	planets as expectedPlanets,
	ringing as expectedRinging,
	snakes as expectedSnakes
} from "../expected/pipeline";
import {
	animals as inputAnimals,
	beverages as inputBeverages,
	countries as inputCountries,
	fruitTable as inputFruitTable,
	junkFood as inputJunkFood,
	martialArts as inputMartialArts,
	path as inputPath,
	planets as inputPlanets,
	ringing as inputRinging,
	snakes as inputSnakes
} from "../input/pipeline";
import { replaceAlertCharacter } from "../../src/pipeline/auxiliary/alert";
import { replaceBackslashCharacter } from "../../src/pipeline/auxiliary/backslash";
import { replaceBackspaceCharacter } from "../../src/pipeline/auxiliary/backspace";
import { replaceCarriageReturnCharacter } from "../../src/pipeline/auxiliary/carriage-return";
import { replaceEndOfTextCharacter } from "../../src/pipeline/auxiliary/end-of-text";
import { replaceEscapeCharacter } from "../../src/pipeline/auxiliary/escape-character";
import { replaceFormFeedCharacter } from "../../src/pipeline/auxiliary/form-feed";
import { replaceTabCharacter } from "../../src/pipeline/auxiliary/tab";
import { replaceVerticalTabCharacter } from "../../src/pipeline/auxiliary/vertical-tab";
import { replacenewlineCharacter } from "../../src/pipeline/auxiliary/newline";
import { strictEqual } from "assert";

/**
 * All of the unit tests for the backslash-escaped characters.
 */
export function testEscape(): void {
	describe("escape", function() {
		// Alert
		describe("alert", function() {
			describe("ringing", function() {
				it("should have alert character at the end of each ring", function() {
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
				it("should have backspace characters", function() {
					strictEqual(replaceBackspaceCharacter(inputAnimals), expectedAnimals);
				});
			});
		});

		// Carriage return
		describe("carriage return", function() {
			describe("planets", function() {
				it("should have carriage return characters", function() {
					strictEqual(replaceCarriageReturnCharacter(inputPlanets), expectedPlanets);
				});
			});
		});

		// Escape character
		describe("escape", function() {
			describe("snakes", function() {
				it("should have escape characters", function() {
					strictEqual(replaceEscapeCharacter(inputSnakes), expectedSnakes);
				});
			});
		});

		// Form feed
		describe("formFeed", function() {
			describe("countries", function() {
				it("should have form feed characters", function() {
					strictEqual(replaceFormFeedCharacter(inputCountries), expectedCountries);
				});
			});
		});

		// Tab
		describe("tab", function() {
			describe("fruitTable", function() {
				it("should have tabs", function() {
					strictEqual(replaceTabCharacter(inputFruitTable), expectedFruitTable);
				});
			});
		});

		// Vertical tab
		describe("verticalTab", function() {
			describe("beverages", function() {
				it("should have vertical tabs", function() {
					strictEqual(replaceVerticalTabCharacter(inputBeverages), expectedBeverages);
				});
			});
		});
		// End of text
		describe("endOfText", function() {
			describe("junkFood", function() {
				it("should have end of text", function() {
					strictEqual(replaceEndOfTextCharacter(inputJunkFood), expectedJunkFood);
				});
			});
		});
		// New line
		describe("newLine", function() {
			describe("martialArts", function() {
				it("should have new line", function() {
					strictEqual(replacenewlineCharacter(inputMartialArts), expectedMartialArts);
				});
			});
		});
	});
}
