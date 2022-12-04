import { readFileSync } from "node:fs";

const lines = readFileSync("input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

const moves = {
    rock: 1,
    paper: 2,
    scissors: 3,
};

const mapInput = {
    A: moves.rock,
    B: moves.paper,
    C: moves.scissors,
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
};

function score(hisMove, myMove) {
    if (hisMove === myMove) {
        return myMove + 3;
    }
    if (
        (hisMove === moves.rock && myMove === moves.paper) ||
        (hisMove === moves.paper && myMove === moves.scissors) ||
        (hisMove === moves.scissors && myMove === moves.rock)
    ) {
        // I win
        return myMove + 6;
    }
    // I lost
    return myMove;
}

function part1() {
    const outcomes = lines.map((line) => {
        const hisMove = mapInput[line[0]];
        const myMove = mapInput[line[1]];
        return score(hisMove, myMove);
    });
    console.log(outcomes.reduce((a, b) => a + b, 0));
}

const solution = {
    //rock
    A: {
        X: moves.scissors, //lose
        Y: moves.rock, //draw
        Z: moves.paper, //win
    },
    //paper
    B: {
        X: moves.rock,
        Y: moves.paper,
        Z: moves.scissors,
    },
    //scissors
    C: {
        X: moves.paper,
        Y: moves.scissors,
        Z: moves.rock,
    },
};

function part2() {
    const outcomes = lines.map((line) => {

        const hisMove = mapInput[line[0]];
        const myMove = solution[line[0]][line[1]];

        return score(hisMove, myMove);
    });
    console.log(outcomes.reduce((a, b) => a + b, 0));
}

part1();
part2();