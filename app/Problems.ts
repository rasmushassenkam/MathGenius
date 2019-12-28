import { Problem } from "./interfaces/Problem";

export const Problems: Array<Problem> = [
    {
        problem: "1 + 2 - 3 =",
        answer: "0",
        currentIndex: 0,
        nextIndex: 1
    },
    {
        problem: "1 x 2 + 3 =",
        answer: "5",
        currentIndex: 1,
        nextIndex: 2
    },
    {
        problem: "1 + 2 x 3 =",
        answer: "7",
        currentIndex: 2,
        nextIndex: 3
    },
    {
        problem: "1 - 2 x 3 =",
        answer: "-5",
        currentIndex: 3,
        nextIndex: 4
    },
    {
        problem: "-1 - 2 x 3 =",
        answer: "-7",
        currentIndex: 4,
        nextIndex: 5
    },
    {
        problem: "1 + 2 x 3 + 4 =",
        answer: "11",
        currentIndex: 5,
        nextIndex: 6
    },
    {
        problem: "1 - 2 - 3 x 4 =",
        answer: "-13",
        currentIndex: 6,
        nextIndex: 7
    },
    {
        problem: "-1 - 2 x 3 + 4",
        answer: "-3",
        currentIndex: 7,
        nextIndex: 8
    },
    {
        problem: "1 + 2 x 3 x 4",
        answer: "25",
        currentIndex: 8,
        nextIndex: 9
    },
    {
        problem: "-1 - 2 x 3 x 4",
        answer: "-25",
        currentIndex: 9,
        nextIndex: 10
    },
];