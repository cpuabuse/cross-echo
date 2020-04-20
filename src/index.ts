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

import { Command } from "commander";
import { enableBackslash } from "./pipeline/enable-backslash";

/**
 * Flags provided in the command line.
 */
interface Flags {
	noTrailingNewline: boolean;
	disableBackslash: boolean;
	enableBackslash: boolean;
}

/**
 * Literal empty string.
 */
const emptyString: string = "";

/**
 * Parsed arguments from command line.
 */
interface ParsedArgs extends Flags {
	stdin: string;
}

/**
 * A function performing file processing, mocking behavoir of linux echo command.
 */
function echo(text: string, flags: Flags): void {
	// // Disable interpretation of backslash escape sequences. This is the default.
	// if (flags.disableBackslash) {
	// 	text = backslashOff(text); // eslint-disable-line no-param-reassign
	// }

	// Enable interpretation of backslash escape sequences
	if (flags.enableBackslash) {
		text = enableBackslash(text); // eslint-disable-line no-param-reassign
	}
	log(text);

	// Do not output a trailing newline.
	if (!flags.noTrailingNewline) {
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
	program.on("--help", function() {
		// eslint-disable-next-line no-console
		console.log(`
Examples:
    echo -n   Do not append a newline.
    echo -    Write arguments to the standard output.`);
	});

	// Initialize flags
	// TODO: add "name" before "option"
	program.option("-n", "do not append a newline");
	program.option("-e", "enable interpretation of the following backslash escapes");
	program.option("-E", "explicitly suppress interpretation of backslash escapes");
	program.parse(process.argv);

	console.log(program);
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
		disabledBackslash: checkFlag("E"),
		enabledBackslash: checkFlag("e"),
		noTrailingNewline: checkFlag("n"),
		stdin: process.stdin.isTTY ? await getStdin() : emptyString
	} as ParsedArgs;
}

/**
 * Main function.
 */
async function main(): Promise<void> {
	console.log(await parseArgs());
	echo();
}

// Call the main
main();
