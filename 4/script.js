import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

function part1() {

    const sectionsList = input.map(line => {

        // Getting the start value and end value of each pair of numbers
        const [startID, endID] = line.split(",")
                                     .map((pairs) => pairs
                                     .split("-")
                                     .map(Number))
                                     .sort((a, b) => {
                                         const sameLength = a[1] - a[0];
                                         const differentLength = b[1] - b[0];

                                         return differentLength - sameLength;
                                     })
        // Comparing numbers in sections
        const firstIncludesSecond =
            startID[0] <= endID[0] && startID[1] >= endID[1];

        return firstIncludesSecond ? 1 : 0;

    });
    // Summing all includes
    console.log(sectionsList.reduce((a, b) => a + b, 0));
}

part1();