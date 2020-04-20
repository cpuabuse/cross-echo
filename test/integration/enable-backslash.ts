/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Performs a series of integration tests for the backslash-escaped characters.
 */

import {
	cities as expectedCities,
	electronics as expectedElectronics,
	path as expectedPath
} from "../expected/pipeline";
import { cities as inputCities, electronics as inputElectronics, path as inputPath } from "../input/pipeline";
import { enableBackslash } from "../../src/pipeline/enable-backslash";
import { strictEqual } from "assert";

/**
 * All of the integration tests for the backslash-escaped characters.
 */
export function testEnableBackslash(): void {
	describe("enableBackslash", function() {
		// Backslash
		describe("backslash", function() {
			describe("path", function() {
				it("should have backslash character in the path", function() {
					strictEqual(enableBackslash(inputPath), expectedPath);
				});
			});
			describe("electronics", function() {
				it('should have "a" character right after the backslash', function() {
					strictEqual(enableBackslash(inputElectronics), expectedElectronics);
				});
			});
			describe("crlf", function() {
				it("should return crlf newlines", function() {
					strictEqual(enableBackslash(inputCities), expectedCities);
				});
			});
		});
	});
}
testEnableBackslash();
