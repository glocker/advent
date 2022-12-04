import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

function part1() {

    const sectionsList = input.map(line => {

        // Getting the start value and end value of each pair of numbers
        const [startID, endID] = line.split(",")
                                     .map((pairs) =>
                                         pairs.split("-")
                                              .map(Number));

        console.log({startID, endID});
    });

    console.log(sectionsList);
}

part1();