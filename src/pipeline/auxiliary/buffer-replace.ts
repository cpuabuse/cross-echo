/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Hexadecimal value replacement.
 */

import {
	emptyString,
	hexArrayOfDigits,
	hexMaxNumberOfDigits,
	hexRadix,
	hexSeparator,
	octArrayOfDigits,
	octMaxNumberOfDigits,
	octRadix,
	octSeparator
} from "../../defaults";

/**
 * Interface for interpreation for the buffer stage.
 */
interface BinaryInterpretation {
	/**
	 * Array of allowed characters for interpretation.
	 */
	arrayOfDigits: Array<string>;

	/**
	 * Max number of digits to interpret.
	 */
	maxNumberOfDigits: number;

	/**
	 * Radix for interpretation.
	 */
	radix: number;

	/**
	 * Remove separator
	 */
	removeSeparator: boolean;

	/**
	 * A separator for signifying the begining of the interpretation sequence.
	 */
	separator: string;
}

/**
 * Sentence between separators for interpretation.
 */
interface Sentence {
	/**
	 * Sentence itself.
	 */
	value: string;

	/**
	 * Index of the [[Interpretation]].
	 */
	index: number;
}

/**
 * A function that replaces hexadecimal value with whatever its value is in the ASCII table.
 * @param text String to replace
 * @returns String with replaced characters
 */
export function bufferReplace(text: string): Buffer {
	const interpretations: Array<BinaryInterpretation> = [
		{
			arrayOfDigits: hexArrayOfDigits,
			maxNumberOfDigits: hexMaxNumberOfDigits,
			radix: hexRadix,
			removeSeparator: false,
			separator: hexSeparator
		},
		{
			arrayOfDigits: octArrayOfDigits,
			maxNumberOfDigits: octMaxNumberOfDigits,
			radix: octRadix,
			removeSeparator: true,
			separator: octSeparator
		}
	];

	let sentences: Array<Sentence> = interpretations.reduce<Array<Sentence>>(
		function (accumulator, current, index) {
			return accumulator
				.map(function (sentence) {
					let deeperSentences: Array<Sentence> = sentence.value.split(current.separator).map(function (value) {
						return {
							index,
							value
						};
					});
					deeperSentences[0].index = sentence.index;
					return deeperSentences;
				})
				.flat();
		},
		[{ index: NaN, value: text }]
	);

	return sentences.slice(1).reduce<Buffer>(function (accumulator, sentence) {
		if (sentence.value.length > 0) {
			let characters: Array<string> = sentence.value.split(emptyString);
			let numberOfDigits: number = 0;
			for (; numberOfDigits < interpretations[sentence.index].maxNumberOfDigits; numberOfDigits++) {
				if (!interpretations[sentence.index].arrayOfDigits.includes(characters[numberOfDigits])) {
					break;
				}
			}
			if (numberOfDigits > 0) {
				// If we are here, then we replace
				let finalNumber: number = parseInt(
					sentence.value.substring(0, numberOfDigits),
					interpretations[sentence.index].radix
				);
				// If there is nothing left in the sentence, then the substring will return an empty string
				return Buffer.concat([
					accumulator,
					Buffer.from([finalNumber]),
					Buffer.from(sentence.value.substring(numberOfDigits))
				]);
			}
		}
		return Buffer.concat([
			accumulator,
			Buffer.from(
				(interpretations[sentence.index].removeSeparator ? emptyString : interpretations[sentence.index].separator) +
					sentence.value
			)
		]);
	}, Buffer.from(sentences[0].value));
}
