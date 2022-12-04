import { readFileSync } from "node:fs";

const lines = readFileSync("input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

function getPriority(letter) {
    if (/[a-z]/.test(letter)) {
        // lowercase
        return letter.charCodeAt(0) - 96;
    } else {
        return letter.charCodeAt(0) - 65 + 27;
    }
}

function part1() {
    const res = lines.map((str) => {
        const part1 = [...str.slice(0, str.length / 2)];
        const part2 = [...str.slice(str.length / 2)];

        let part1Set = new Set(part1);
        const intersection = part2.filter((x) => part1Set.has(x));
        const dedup = [...new Set(intersection)];

        return getPriority(dedup[0]);
    });
    console.log(res.reduce((a, b) => a + b, 0));
}

function part2() {
    let sum = 0;
    for (let i = 0; i < lines.length; i += 3) {
        const rucksack = [[...lines[i]], [...lines[i + 1]], [...lines[i + 2]]];

        let set = new Set(rucksack[0]);
        let intersection = rucksack[1].filter((x) => set.has(x));

        set = new Set(intersection);
        intersection = rucksack[2].filter((x) => set.has(x));

        const dedup = [...new Set(intersection)];

        sum += getPriority(dedup[0]);
    }
    console.log(sum);
}

part1();
part2();