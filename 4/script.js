import { readFileSync } from "node:fs";

const input = readFileSync("input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

console.log(input);