import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

function part1() {
    const caloriesSum = input.map((item) => {
        const calories = item.split("\n").map(Number);
        return calories.reduce((previous, current) => previous + current, 0);
    });
    console.log(Math.max(...caloriesSum));
}

function part2() {
    const caloriesSum = input.map((item) => {
        const calories = item.split("\n").map(Number);
        return calories.reduce((prev, cur) => prev + cur, 0);
    });
    caloriesSum.sort((a, b) => b - a);
    console.log(
        caloriesSum.slice(0, 3).reduce((prev, cur) => prev + cur, 0)
    );
}

part1();
part2();