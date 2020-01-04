import { Problem } from "./interfaces/Problem";

export const Problems: Array<Problem> = [
    {
        problem: "1 + 2 - 3 =",
        answer: "0",
        currentIndex: 0,
        nextIndex: 1,
        hints: ["3 - 3 =", "0 ="]
    },
    {
        problem: "1 x 2 + 3 =",
        answer: "5",
        currentIndex: 1,
        nextIndex: 2,
        hints: ["(1 x 2) + 3 =", "2 + 3 =", "5 ="]
    },
    {
        problem: "1 + 2 x 3 =",
        answer: "7",
        currentIndex: 2,
        nextIndex: 3,
        hints: ["1 + (2 x 3) =", "1 + 6 =", "7 ="]
    },
    {
        problem: "1 - 2 x 3 =",
        answer: "-5",
        currentIndex: 3,
        nextIndex: 4,
        hints: ["1 - (2 x 3) =", "1 - 6 =", "-5 ="]
    },
    {
        problem: "-1 - 2 x 3 =",
        answer: "-7",
        currentIndex: 4,
        nextIndex: 5,
        hints: ["-1 - (2 x 3) =", "-1 - 6 =", "-7 ="]
    },
    {
        problem: "1 + 2 x 3 + 4 =",
        answer: "11",
        currentIndex: 5,
        nextIndex: 6,
        hints: ["1 + (2 x 3) + 4 =", "1 + 6 + 4 =", "11 ="]
    },
    {
        problem: "1 - 2 - 3 x 4 =",
        answer: "-13",
        currentIndex: 6,
        nextIndex: 7,
        hints: ["1 - 2 - (3 x 4) =", " 1 - 2 - 12 =", "-13 ="]
    },
    {
        problem: "-1 - 2 x 3 + 4",
        answer: "-3",
        currentIndex: 7,
        nextIndex: 8,
        hints: ["-1 - (2 x 3) + 4 =", "-1 - 6 + 4 =", "-3 ="]
    },
    {
        problem: "1 + 2 x 3 x 4",
        answer: "25",
        currentIndex: 8,
        nextIndex: 9,
        hints: ["1 + (2 x 3 x 4) =", "1 + 24 =", "25 ="]
    },
    {
        problem: "-1 - 2 x 3 x 4",
        answer: "-25",
        currentIndex: 9,
        nextIndex: 10,
        hints: ["-1 - (2 x 3 x 4) =", "-1 -24 =", "-25 ="]
    },
];