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
	planets as expectedPlanets,
	ringing as expectedRinging,
	snakes as expectedSnakes
} from "../expected/pipeline";
import {
	animals as inputAnimals,
	beverages as inputBeverages,
	countries as inputCountries,
	fruitTable as inputFruitTable,
	planets as inputPlanets,
	ringing as inputRinging,
	snakes as inputSnakes
} from "../input/pipeline";
import { replaceAlertCharacters } from "../../src/pipeline/auxiliary/alert";
import { replaceBackspaceCharacters } from "../../src/pipeline/auxiliary/backspace";
import { replaceCarriageReturnCharacters } from "../../src/pipeline/auxiliary/carriage-return";
import { replaceEscapeCharacters } from "../../src/pipeline/auxiliary/escape";
import { replaceFormFeedCharacters } from "../../src/pipeline/auxiliary/form-feed";
import { replaceTabCharacters } from "../../src/pipeline/auxiliary/tab";
import { replaceVerticalTabCharacters } from "../../src/pipeline/auxiliary/vertical-tab";
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
					strictEqual(replaceAlertCharacters(inputRinging), expectedRinging);
				});
			});
		});

		// Backspace
		describe("backspace", function() {
			describe("animals", function() {
				it("should have backspace characters", function() {
					strictEqual(replaceBackspaceCharacters(inputAnimals), expectedAnimals);
				});
			});
		});

		// Carriage return
		describe("carriage return", function() {
			describe("planets", function() {
				it("should have carriage return characters", function() {
					strictEqual(replaceCarriageReturnCharacters(inputPlanets), expectedPlanets);
				});
			});
		});

		// Escape character
		describe("escape", function() {
			describe("snakes", function() {
				it("should have escape characters", function() {
					strictEqual(replaceEscapeCharacters(inputSnakes), expectedSnakes);
				});
			});
		});

		// Form feed
		describe("formFeed", function() {
			describe("countries", function() {
				it("should have form feed characters", function() {
					strictEqual(replaceFormFeedCharacters(inputCountries), expectedCountries);
				});
			});
		});

		// Tab
		describe("tab", function() {
			describe("fruitTable", function() {
				it("should have tabs", function() {
					strictEqual(replaceTabCharacters(inputFruitTable), expectedFruitTable);
				});
			});
		});

		// Vertical tab
		describe("verticalTab", function() {
			describe("beverages", function() {
				it("should have vertical tabs", function() {
					strictEqual(replaceVerticalTabCharacters(inputBeverages), expectedBeverages);
				});
			});
		});
	});
}
