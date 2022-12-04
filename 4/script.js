import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

function part1() {

    const sectionsList = input.map(line => line.split(","));

    const startID = sectionsList.map(
        section => section.map(
            pairs => pairs.split("-")[0]
        )
    )

    const endID = sectionsList.map(
        section => section.map(
            pairs => pairs.split("-")[1]
        )
    )


    console.log(startID + "\n" + endID);
}

part1();