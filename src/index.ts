#!/usr/bin/env node

/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Entry point for the project.
 */

/**
 * @license ISC
 * ISC License (ISC)
 *
 * Copyright 2020 cpuabuse.com
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

import { emptyString, spaceString } from "./defaults";
import { Command } from "commander";
import { enableBackslash as doEnableBackslash } from "./pipeline/enable-backslash";

/**
 * Parsed arguments from command line.
 */
interface ParsedArgs {
	noTrailingNewline: boolean;
	disableBackslash: boolean;
	enableBackslash: boolean;
	textArray: Array<string>;
}

/**
 * A function performing file processing, mocking behavoir of linux echo command.
 */
function echo({ disableBackslash, enableBackslash, noTrailingNewline, textArray }: ParsedArgs): void {
	// The backslash processing is effectively on or off
	let backslashIsEnabled: boolean = false;

	// Check if backslash processing was enabled
	if (!disableBackslash && enableBackslash) {
		backslashIsEnabled = true;
	}

	// Iterate through texts
	for (let i: number = 0; i < textArray.length; i++) {
		let text: string = textArray[i];
		log(backslashIsEnabled ? doEnableBackslash(text) : text);
		if (i + 1 < textArray.length) {
			log(spaceString);
		}
	}

	// Do not output a trailing newline.
	if (!noTrailingNewline) {
		log("\n");
	}
}

/**
 * Prints a text.
 * @param text Text to print.
 */
function log(text: string): void {
	// eslint-disable-next-line no-console
	process.stdout.write(text);
}

/**
 * Parse Arguments
 */
async function parseArgs(): Promise<ParsedArgs> {
	let program: Command = new Command();

	// Program metadeta
	program.version("0.0.1");
	program.description(`Write arguments to the standard output.

Display the ARGs on the standard output followed by a newline.`);
	program.on("--help", function () {
		// eslint-disable-next-line no-console
		console.log(`
Examples:
    echo -n   Do not append a newline.
    echo -    Write arguments to the standard output.`);
	});

	// Array of text strings to process
	let textArray: Promise<Array<string>> = new Promise(function (resolve) {
		// Get strings; The method action is synchronous.
		program.arguments("[strings...]").action(function (argStrings) {
			// Resolve the promise
			resolve(argStrings.length > 0 ? argStrings : [emptyString]);
		});
	});

	// Initialize flags
	// TODO: add "name" before "option"
	program.option("-n, --no-newline", "do not append a newline");
	program.option("-e, --enable-backslash", "enable interpretation of the following backslash escapes");
	program.option("-E, --disable-backslash", "explicitly suppress interpretation of backslash escapes");
	program.parse(process.argv);

	/**
	 * Checks if the flag is set to true.
	 */
	function checkFlag(flag: string): boolean {
		if (Object.prototype.hasOwnProperty.call(program, flag)) {
			if (program[flag] === true) {
				return true;
			}
		}
		return false;
	}

	return {
		disableBackslash: checkFlag("disableBackslash"),
		enableBackslash: checkFlag("enableBackslash"),
		// Special behavior for "--no-*" newline in "commander.js"
		noTrailingNewline: !checkFlag("newline"),
		textArray: await textArray
	};
}

/**
 * Main function.
 */
async function main(): Promise<void> {
	echo(await parseArgs());
}

// Call the main
main();
