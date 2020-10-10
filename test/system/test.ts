/*
	File: test/system/system-test.ts
	cpuabuse.com
*/

/**
 * Performs a series of system tests.
 */
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { ok, strictEqual } from "assert";
import { resolve as pathResolve } from "path";

/**
 * Parent folder.
 */
const parentFolder: string = "..";

/**
 * All of the system tests.
 */
export async function doSpawn(args: Array<string>): Promise<string> {
	let text: string = "";
	await new Promise(function (resolve) {
		let program: ChildProcessWithoutNullStreams = spawn(
			"node",
			[pathResolve(__dirname, parentFolder, parentFolder, "src", "index.js"), ...args],
			{
				stdio: ["pipe", "pipe", "pipe"]
			}
		);

		program.stdout.on("data", data => {
			text += data.toString();
		});

		program.on("exit", function () {
			resolve();
		});
	});
	return text;
}

/**
 * Test for the CLI.
 */
export function systemTest(): void {
	describe("system", function () {
		it("should return a non-empty help menu", function (done) {
			doSpawn(["-h"]).then(function (text) {
				ok(text.length > 0);
				done();
			});
		});
		it("should return a non-empty version number", function (done) {
			doSpawn(["-V"]).then(function (text) {
				ok(text.length > 0);
				done();
			});
		});
	});
}
