import { Problem } from "./interfaces/Problem";

export const Problems: Array<Problem> = [
    {
        problem: "3 + 5 =",
        answer: "8",
        currentIndex: 0,
        nextIndex: 1,
        hints: ["8 ="]
    },
    {
        problem: "7 + 11 =",
        answer: "18",
        currentIndex: 1,
        nextIndex: 2,
        hints: ["18 ="]
    },
    {
        problem: "23 + 22 =",
        answer: "45",
        currentIndex: 2,
        nextIndex: 3,
        hints: ["45 ="]
    },
    {
        problem: "101 + 98 =",
        answer: "199",
        currentIndex: 3,
        nextIndex: 4,
        hints: ["199 ="]
    },
    {
        problem: "42 + 161 =",
        answer: "203",
        currentIndex: 4,
        nextIndex: 5,
        hints: ["203 ="]
    },
    {
        problem: "3 + 7 + 8 =",
        answer: "18",
        currentIndex: 5,
        nextIndex: 6,
        hints: ["10 + 8 =", "18 ="]
    },
    {
        problem: "9 + 18 + 24 =",
        answer: "51",
        currentIndex: 6,
        nextIndex: 7,
        hints: ["27 + 24 =", "51 ="]
    },
    {
        problem: "33 + 31 + 32 =",
        answer: "96",
        currentIndex: 7,
        nextIndex: 8,
        hints: ["64 + 32 =", "96 ="]
    },
    {
        problem: "77 + 13 + 2 =",
        answer: "92",
        currentIndex: 8,
        nextIndex: 9,
        hints: ["90 + 2 =", "92 ="]
    },
    {
        problem: "48 + 17 + 7 =",
        answer: "72",
        currentIndex: 9,
        nextIndex: 10,
        hints: ["65 + 7 =", "72 ="]
    },
    {
        problem: "56 + 11 + 15 =",
        answer: "82",
        currentIndex: 10,
        nextIndex: 11,
        hints: ["67 + 11 =", "82 ="]
    },
    {
        problem: "19 + 33 + 94 =",
        answer: "146",
        currentIndex: 11,
        nextIndex: 12,
        hints: ["52 + 94 =", "146 ="]
    },
    {
        problem: "21 + 16 + 38 =",
        answer: "75",
        currentIndex: 12,
        nextIndex: 13,
        hints: ["37 + 38 =", "75 ="]
    },
    {
        problem: "7 + 77 + 85 =",
        answer: "169",
        currentIndex: 13,
        nextIndex: 14,
        hints: ["84 + 84 =", "169 ="]
    },
    {
        problem: "15 + 48 + 11 =",
        answer: "74",
        currentIndex: 14,
        nextIndex: 15,
        hints: ["63 + 11 =", "74 ="]
    },
    {
        problem: "13 - 5 =",
        answer: "8",
        currentIndex: 15,
        nextIndex: 16,
        hints: ["8 ="]
    },
    {
        problem: "22 - 11 =",
        answer: "11",
        currentIndex: 16,
        nextIndex: 17,
        hints: ["11 ="]
    },
    {
        problem: "123 - 44 =",
        answer: "79",
        currentIndex: 17,
        nextIndex: 18,
        hints: ["79 ="]
    },
    {
        problem: "10 - 15 =",
        answer: "-5",
        currentIndex: 18,
        nextIndex: 19,
        hints: ["-5 ="]
    },
    {
        problem: "1001 - 76 =",
        answer: "925",
        currentIndex: 19,
        nextIndex: 20,
        hints: ["925 ="]
    },
    {
        problem: "323 - 51 =",
        answer: "272",
        currentIndex: 20,
        nextIndex: 21,
        hints: ["272 ="]
    },
    {
        problem: "117 - 19 =",
        answer: "98",
        currentIndex: 21,
        nextIndex: 22,
        hints: ["98 ="]
    },
    {
        problem: "44 - 5 - 18 =",
        answer: "21",
        currentIndex: 22,
        nextIndex: 23,
        hints: ["39 - 18 =", "21 ="]
    },
    {
        problem: "5 x 4 =",
        answer: "20",
        currentIndex: 23,
        nextIndex: 24,
        hints: ["20 ="]
    },
    {
        problem: "6 x 3 =",
        answer: "18",
        currentIndex: 24,
        nextIndex: 25,
        hints: ["18 ="]
    },
    {
        problem: "7 x 8 =",
        answer: "56",
        currentIndex: 25,
        nextIndex: 26,
        hints: ["56 ="]
    },
    {
        problem: "13 x 3 =",
        answer: "39",
        currentIndex: 26,
        nextIndex: 27,
        hints: ["39 ="]
    },
    {
        problem: "25 x 4 =",
        answer: "100",
        currentIndex: 27,
        nextIndex: 28,
        hints: ["100 ="]
    },
    {
        problem: "16 x 3 =",
        answer: "48",
        currentIndex: 28,
        nextIndex: 29,
        hints: ["48 ="]
    },
    {
        problem: "12 x 9 =",
        answer: "108",
        currentIndex: 29,
        nextIndex: 30,
        hints: ["108 ="]
    },
    {
        problem: "5 x 3 x 2 =",
        answer: "30",
        currentIndex: 30,
        nextIndex: 31,
        hints: ["(5 x 3) x 2 =", "15 x 2 =", "30 ="]
    },
    {
        problem: "6 x 8 + 3 =",
        answer: "51",
        currentIndex: 31,
        nextIndex: 32,
        hints: ["(6 x 8) + 3 =", "48 + 3 =", "51 ="]
    },
    {
        problem: "1 + 2 x 3 =",
        answer: "7",
        currentIndex: 32,
        nextIndex: 33,
        hints: ["1 + (2 x 3) =", "1 + 6 =", "7 ="]
    },
    {
        problem: "1 - 2 x 3 =",
        answer: "-5",
        currentIndex: 33,
        nextIndex: 34,
        hints: ["1 - (2 x 3) =", "1 - 6 =", "-5 ="]
    },
    {
        problem: "3 x 3 x 9 =",
        answer: "81",
        currentIndex: 34,
        nextIndex: 35,
        hints: ["(3 x 3) x 9 =", "9 x 9 =", "81 ="]
    },
    {
        problem: "7 + 8 x 2 =",
        answer: "23",
        currentIndex: 35,
        nextIndex: 36,
        hints: ["7 + (8 x 2) =", "7 + 16 =", "23 ="]
    },
    {
        problem: "11 x 3 + 15 =",
        answer: "48",
        currentIndex: 36,
        nextIndex: 37,
        hints: ["(11 x 3) + 15 =", "33 + 15 =", "48 ="]
    },
    {
        problem: "60 - 6 x 6 =",
        answer: "24",
        currentIndex: 37,
        nextIndex: 38,
        hints: ["60 - (6 x 6) =", "60 - 36 =", "24 ="]
    },
    {
        problem: "",
        answer: "",
        currentIndex: 38,
        nextIndex: 39,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 39,
        nextIndex: 40,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 40,
        nextIndex: 41,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 41,
        nextIndex: 42,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 42,
        nextIndex: 43,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 43,
        nextIndex: 44,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 44,
        nextIndex: 45,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 45,
        nextIndex: 46,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 46,
        nextIndex: 47,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 47,
        nextIndex: 48,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 48,
        nextIndex: 49,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 49,
        nextIndex: 50,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 50,
        nextIndex: 51,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 51,
        nextIndex: 52,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 52,
        nextIndex: 53,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 53,
        nextIndex: 54,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 54,
        nextIndex: 55,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 55,
        nextIndex: 56,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 56,
        nextIndex: 57,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 57,
        nextIndex: 58,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 58,
        nextIndex: 59,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 59,
        nextIndex: 60,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 60,
        nextIndex: 61,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 61,
        nextIndex: 62,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 62,
        nextIndex: 63,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 63,
        nextIndex: 64,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 64,
        nextIndex: 65,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 65,
        nextIndex: 66,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 66,
        nextIndex: 67,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 67,
        nextIndex: 68,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 68,
        nextIndex: 69,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 69,
        nextIndex: 70,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 70,
        nextIndex: 71,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 71,
        nextIndex: 72,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 72,
        nextIndex: 73,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 73,
        nextIndex: 74,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 74,
        nextIndex: 75,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 75,
        nextIndex: 76,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 76,
        nextIndex: 77,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 77,
        nextIndex: 78,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 78,
        nextIndex: 79,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 79,
        nextIndex: 80,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 80,
        nextIndex: 81,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 81,
        nextIndex: 82,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 82,
        nextIndex: 83,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 83,
        nextIndex: 84,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 84,
        nextIndex: 85,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 85,
        nextIndex: 86,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 86,
        nextIndex: 87,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 87,
        nextIndex: 88,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 88,
        nextIndex: 89,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 89,
        nextIndex: 90,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 90,
        nextIndex: 91,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 91,
        nextIndex: 92,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 93,
        nextIndex: 93,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 93,
        nextIndex: 94,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 94,
        nextIndex: 95,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 95,
        nextIndex: 96,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 96,
        nextIndex: 97,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 97,
        nextIndex: 98,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 98,
        nextIndex: 99,
        hints: []
    },
    {
        problem: "",
        answer: "",
        currentIndex: 99,
        nextIndex: -1,
        hints: []
    },
];