import { Problem } from "./interfaces/Problem";

export const Problems: Array<Problem> = [
    {
        problem: "2 x 2 x 2 / 2 x 2 + 2 =",
        answer: "10",
        currentIndex: 0,
        nextIndex: 1,
        hints: ["(2 x 2 x 2) / 2 x 2 + 2 =", "8 / 2 x 2 + 2 =", "(8 / 2) x 2 + 2 =", "4 x 2 + 2 =", "(4 x 2) + 2 =", "8 + 2 =", "10 ="]
    },
    {
        problem: "1 + 2=",
        answer: "3",
        currentIndex: 1,
        nextIndex: -1,
        hints: ["hint1, hint2, hint3, hint4"]
    }
    // {
    //     problem: "3 + 5 =",
    //     answer: "8",
    //     currentIndex: 0,
    //     nextIndex: 1,
    //     hints: ["8 ="]
    // },
    // {
    //     problem: "7 + 11 =",
    //     answer: "18",
    //     currentIndex: 1,
    //     nextIndex: 2,
    //     hints: ["18 ="]
    // },
    // {
    //     problem: "23 + 22 =",
    //     answer: "45",
    //     currentIndex: 2,
    //     nextIndex: 3,
    //     hints: ["45 ="]
    // },
    // {
    //     problem: "101 + 98 =",
    //     answer: "199",
    //     currentIndex: 3,
    //     nextIndex: 4,
    //     hints: ["199 ="]
    // },
    // {
    //     problem: "42 + 161 =",
    //     answer: "203",
    //     currentIndex: 4,
    //     nextIndex: 5,
    //     hints: ["203 ="]
    // },
    // {
    //     problem: "3 + 7 + 8 =",
    //     answer: "18",
    //     currentIndex: 5,
    //     nextIndex: 6,
    //     hints: ["10 + 8 =", "18 ="]
    // },
    // {
    //     problem: "9 + 18 + 24 =",
    //     answer: "51",
    //     currentIndex: 6,
    //     nextIndex: 7,
    //     hints: ["27 + 24 =", "51 ="]
    // },
    // {
    //     problem: "33 + 31 + 32 =",
    //     answer: "96",
    //     currentIndex: 7,
    //     nextIndex: 8,
    //     hints: ["64 + 32 =", "96 ="]
    // },
    // {
    //     problem: "77 + 13 + 2 =",
    //     answer: "92",
    //     currentIndex: 8,
    //     nextIndex: 9,
    //     hints: ["90 + 2 =", "92 ="]
    // },
    // {
    //     problem: "48 + 17 + 7 =",
    //     answer: "72",
    //     currentIndex: 9,
    //     nextIndex: 10,
    //     hints: ["65 + 7 =", "72 ="]
    // },
    // {
    //     problem: "56 + 11 + 15 =",
    //     answer: "82",
    //     currentIndex: 10,
    //     nextIndex: 11,
    //     hints: ["67 + 11 =", "82 ="]
    // },
    // {
    //     problem: "19 + 33 + 94 =",
    //     answer: "146",
    //     currentIndex: 11,
    //     nextIndex: 12,
    //     hints: ["52 + 94 =", "146 ="]
    // },
    // {
    //     problem: "21 + 16 + 38 =",
    //     answer: "75",
    //     currentIndex: 12,
    //     nextIndex: 13,
    //     hints: ["37 + 38 =", "75 ="]
    // },
    // {
    //     problem: "7 + 77 + 85 =",
    //     answer: "169",
    //     currentIndex: 13,
    //     nextIndex: 14,
    //     hints: ["84 + 84 =", "169 ="]
    // },
    // {
    //     problem: "15 + 48 + 11 =",
    //     answer: "74",
    //     currentIndex: 14,
    //     nextIndex: 15,
    //     hints: ["63 + 11 =", "74 ="]
    // },
    // {
    //     problem: "13 - 5 =",
    //     answer: "8",
    //     currentIndex: 15,
    //     nextIndex: 16,
    //     hints: ["8 ="]
    // },
    // {
    //     problem: "22 - 11 =",
    //     answer: "11",
    //     currentIndex: 16,
    //     nextIndex: 17,
    //     hints: ["11 ="]
    // },
    // {
    //     problem: "123 - 44 =",
    //     answer: "79",
    //     currentIndex: 17,
    //     nextIndex: 18,
    //     hints: ["79 ="]
    // },
    // {
    //     problem: "10 - 15 =",
    //     answer: "-5",
    //     currentIndex: 18,
    //     nextIndex: 19,
    //     hints: ["-5 ="]
    // },
    // {
    //     problem: "1001 - 76 =",
    //     answer: "925",
    //     currentIndex: 19,
    //     nextIndex: 20,
    //     hints: ["925 ="]
    // },
    // {
    //     problem: "323 - 51 =",
    //     answer: "272",
    //     currentIndex: 20,
    //     nextIndex: 21,
    //     hints: ["272 ="]
    // },
    // {
    //     problem: "117 - 19 =",
    //     answer: "98",
    //     currentIndex: 21,
    //     nextIndex: 22,
    //     hints: ["98 ="]
    // },
    // {
    //     problem: "44 - 5 - 18 =",
    //     answer: "21",
    //     currentIndex: 22,
    //     nextIndex: 23,
    //     hints: ["39 - 18 =", "21 ="]
    // },
    // {
    //     problem: "5 x 4 =",
    //     answer: "20",
    //     currentIndex: 23,
    //     nextIndex: 24,
    //     hints: ["20 ="]
    // },
    // {
    //     problem: "6 x 3 =",
    //     answer: "18",
    //     currentIndex: 24,
    //     nextIndex: 25,
    //     hints: ["18 ="]
    // },
    // {
    //     problem: "7 x 8 =",
    //     answer: "56",
    //     currentIndex: 25,
    //     nextIndex: 26,
    //     hints: ["56 ="]
    // },
    // {
    //     problem: "13 x 3 =",
    //     answer: "39",
    //     currentIndex: 26,
    //     nextIndex: 27,
    //     hints: ["39 ="]
    // },
    // {
    //     problem: "25 x 4 =",
    //     answer: "100",
    //     currentIndex: 27,
    //     nextIndex: 28,
    //     hints: ["100 ="]
    // },
    // {
    //     problem: "16 x 3 =",
    //     answer: "48",
    //     currentIndex: 28,
    //     nextIndex: 29,
    //     hints: ["48 ="]
    // },
    // {
    //     problem: "12 x 9 =",
    //     answer: "108",
    //     currentIndex: 29,
    //     nextIndex: 30,
    //     hints: ["108 ="]
    // },
    // {
    //     problem: "5 x 3 x 2 =",
    //     answer: "30",
    //     currentIndex: 30,
    //     nextIndex: 31,
    //     hints: ["(5 x 3) x 2 =", "15 x 2 =", "30 ="]
    // },
    // {
    //     problem: "6 x 8 + 3 =",
    //     answer: "51",
    //     currentIndex: 31,
    //     nextIndex: 32,
    //     hints: ["(6 x 8) + 3 =", "48 + 3 =", "51 ="]
    // },
    // {
    //     problem: "1 + 2 x 3 =",
    //     answer: "7",
    //     currentIndex: 32,
    //     nextIndex: 33,
    //     hints: ["1 + (2 x 3) =", "1 + 6 =", "7 ="]
    // },
    // {
    //     problem: "1 - 2 x 3 =",
    //     answer: "-5",
    //     currentIndex: 33,
    //     nextIndex: 34,
    //     hints: ["1 - (2 x 3) =", "1 - 6 =", "-5 ="]
    // },
    // {
    //     problem: "3 x 3 x 9 =",
    //     answer: "81",
    //     currentIndex: 34,
    //     nextIndex: 35,
    //     hints: ["(3 x 3) x 9 =", "9 x 9 =", "81 ="]
    // },
    // {
    //     problem: "7 + 8 x 2 =",
    //     answer: "23",
    //     currentIndex: 35,
    //     nextIndex: 36,
    //     hints: ["7 + (8 x 2) =", "7 + 16 =", "23 ="]
    // },
    // {
    //     problem: "11 x 3 + 15 =",
    //     answer: "48",
    //     currentIndex: 36,
    //     nextIndex: 37,
    //     hints: ["(11 x 3) + 15 =", "33 + 15 =", "48 ="]
    // },
    // {
    //     problem: "60 - 6 x 6 =",
    //     answer: "24",
    //     currentIndex: 37,
    //     nextIndex: 38,
    //     hints: ["60 - (6 x 6) =", "60 - 36 =", "24 ="]
    // },
    // {
    //     problem: "13 + 5 x 7 =",
    //     answer: "48",
    //     currentIndex: 38,
    //     nextIndex: 39,
    //     hints: ["13 + (5 x 7) =", "13 + 35 =", "48 ="]
    // },
    // {
    //     problem: "16 x 2 - 3 =",
    //     answer: "29",
    //     currentIndex: 39,
    //     nextIndex: 40,
    //     hints: ["(16 x 2) - 3 =", "32 - 3 = ", "29 ="]
    // },
    // {
    //     problem: "23 x 3 + 5 =",
    //     answer: "74",
    //     currentIndex: 40,
    //     nextIndex: 41,
    //     hints: ["(23 x 3) + 5 =", "69 + 3 =", "74 ="]
    // },
    // {
    //     problem: "21 x 4 + 7 =",
    //     answer: "91",
    //     currentIndex: 41,
    //     nextIndex: 42,
    //     hints: ["(21 x 4) + 7 =", "84 + 7 =", "91 ="]
    // },
    // {
    //     problem: "33 - 3 x 10 =",
    //     answer: "3",
    //     currentIndex: 42,
    //     nextIndex: 43,
    //     hints: ["33 - (3 x 10) =", "33 - 30 =", "3 ="]
    // },
    // {
    //     problem: "5 + 3 x 11 =",
    //     answer: "38",
    //     currentIndex: 43,
    //     nextIndex: 44,
    //     hints: ["5 + (3 x 11) =", "5 + 33 ) =", "38 ="]
    // },
    // {
    //     problem: "7 x 7 x 2 =",
    //     answer: "98",
    //     currentIndex: 44,
    //     nextIndex: 45,
    //     hints: ["(7 x 7) x 2 =", "49 x 2 =", "98 ="]
    // },
    // {
    //     problem: "3 - 2 x 8 + 3 =",
    //     answer: "-10",
    //     currentIndex: 45,
    //     nextIndex: 46,
    //     hints: ["3 - (2 x 8) + 3 =", "3 - 16 + 3 =", "3 - 13 =", "-10 ="]
    // },
    // {
    //     problem: "7 + 11 x 4 + 5 =",
    //     answer: "56",
    //     currentIndex: 46,
    //     nextIndex: 47,
    //     hints: ["7 + (11 x 4) + 5 =", "7 + 44 + 5 =", "51 + 5 =", "56 ="]
    // },
    // {
    //     problem: "58 - 8 x 7 =",
    //     answer: "2",
    //     currentIndex: 47,
    //     nextIndex: 48,
    //     hints: ["58 - (8 x 7) =", "58 - 56 =", "2 ="]
    // },
    // {
    //     problem: "15 / 3 =",
    //     answer: "5",
    //     currentIndex: 48,
    //     nextIndex: 49,
    //     hints: ["5 ="]
    // },
    // {
    //     problem: "25 / 5 =",
    //     answer: "5",
    //     currentIndex: 49,
    //     nextIndex: 50,
    //     hints: ["5 ="]
    // },
    // {
    //     problem: "6 + 6 / 3 =",
    //     answer: "8",
    //     currentIndex: 50,
    //     nextIndex: 51,
    //     hints: ["6 + (6 / 3) =", "6 + 2 =", "8 ="]
    // },
    // {
    //     problem: "17 - 8 / 4 =",
    //     answer: "15",
    //     currentIndex: 51,
    //     nextIndex: 52,
    //     hints: ["17 - (8 / 4) =", "17 - 2 =", "15 ="]
    // },
    // {
    //     problem: "3 x 8 / 4 =",
    //     answer: "6",
    //     currentIndex: 52,
    //     nextIndex: 53,
    //     hints: ["(3 x 8) / 4 =", "24 / 4 =", "6 ="]
    // },
    // {
    //     problem: "5 x 9 / 3 =",
    //     answer: "15",
    //     currentIndex: 53,
    //     nextIndex: 54,
    //     hints: ["(5 x 9) / 3 =", "45 / 3 =", "15 ="]
    // },
    // {
    //     problem: "11 + 9 / 3 =",
    //     answer: "14",
    //     currentIndex: 54,
    //     nextIndex: 55,
    //     hints: ["11 + (9 / 3) =", "11 + 3 =", "14 ="]
    // },
    // {
    //     problem: "22 / 2 + 15 =",
    //     answer: "26",
    //     currentIndex: 55,
    //     nextIndex: 56,
    //     hints: ["(22 / 2) + 15 =", "11 + 15 =", "26 ="]
    // },
    // {
    //     problem: "43 + 5 x 5 =",
    //     answer: "68",
    //     currentIndex: 56,
    //     nextIndex: 57,
    //     hints: ["43 + (5 x 5) =", "43 + 25 =", "68 ="]
    // },
    // {
    //     problem: "1 x 2 + 3 - 4 =",
    //     answer: "1",
    //     currentIndex: 57,
    //     nextIndex: 58,
    //     hints: ["(1 x 2) + 3 - 4 =", "2 + 3 - 4 =", "5 - 4 =", "1 ="]
    // },
    // {
    //     problem: "4 + 5 x 6 - 7 =",
    //     answer: "27",
    //     currentIndex: 58,
    //     nextIndex: 59,
    //     hints: ["4 + (5 x 6) - 7 =", "4 + 30 - 7 =", "34 - 7 =", "27 ="]
    // },
    // {
    //     problem: "2 + 2 x 2 / 2 =",
    //     answer: "4",
    //     currentIndex: 59,
    //     nextIndex: 60,
    //     hints: ["2 + (2 x 2) / 2 =", "2 + 4 / 2 =", "2 + (4 / 2) =", "2 + 2 =", "4 ="]
    // },
    // {
    //     problem: "3 x 4 x 5 - 10 =",
    //     answer: "50",
    //     currentIndex: 60,
    //     nextIndex: 61,
    //     hints: ["(3 x 4 x 5) - 10 =", "(12 x 5) - 10 =", "60 - 10 =", "50 ="]
    // },
    // {
    //     problem: "10 - 1 x 8 + 2 =",
    //     answer: "4",
    //     currentIndex: 61,
    //     nextIndex: 62,
    //     hints: ["10 - (1 x 8) + 2 =", "10 - 8 + 2 =", "2 + 2 =", "4 ="]
    // },
    // {
    //     problem: "13 x 3 + 5 - 2 =",
    //     answer: "42",
    //     currentIndex: 62,
    //     nextIndex: 63,
    //     hints: ["(13 x 3) + 5 - 2 =", "39 + 5 - 2 =", "44 - 2 =", "42 ="]
    // },
    // {
    //     problem: "7 + 7 x 4 / 2 =",
    //     answer: "21",
    //     currentIndex: 63,
    //     nextIndex: 64,
    //     hints: ["7 + (7 x 4) / 2 =", "7 + 28 / 2 =", "7 + (28 / 2) =", "7 + 14 =", "21 ="]
    // },
    // {
    //     problem: "17 - 6 x 3 + 1 =",
    //     answer: "0",
    //     currentIndex: 64,
    //     nextIndex: 65,
    //     hints: ["17 - (6 x 3) + 1 =", "17 - 18 + 1 =", "-1 + 1 =", "0 ="]
    // },
    // {
    //     problem: "2 - 8 x 4 =",
    //     answer: "-30",
    //     currentIndex: 65,
    //     nextIndex: 66,
    //     hints: ["2 - (8 x 4) = ", "2 - 32 =", "-30 ="]
    // },
    // {
    //     problem: "6 + 6 x 6 / 6 =",
    //     answer: "12",
    //     currentIndex: 66,
    //     nextIndex: 67,
    //     hints: ["6 + (6 x 6) / 6 =", "6 + 36 / 6 =", "6 + (36 / 6) =", "6 + 6 =", "12 ="]
    // },
    // {
    //     problem: "5 / 5 + 8 - 8 =",
    //     answer: "1",
    //     currentIndex: 67,
    //     nextIndex: 68,
    //     hints: ["(5 / 5) + 8 - 8 =", "1 + 8 - 8 =", "9 - 8 =", "1"]
    // },
    // {
    //     problem: "23 + 7 x 3 =",
    //     answer: "44",
    //     currentIndex: 68,
    //     nextIndex: 69,
    //     hints: ["23 + (7 x 3) =", "23 + 21 =", "44 ="]
    // },
    // {
    //     problem: "44 - 28 x 2 =",
    //     answer: "-12",
    //     currentIndex: 69,
    //     nextIndex: 70,
    //     hints: ["44 - (28 x 2) =", "44 - 56 =", "-12 ="]
    // },
    // {
    //     problem: "-12 + 6 x 3",
    //     answer: "6",
    //     currentIndex: 70,
    //     nextIndex: 71,
    //     hints: ["-12 + (6 x 3) =", "-12 + 18 =", "6 ="]
    // },
    // {
    //     problem: "-1 + 2 x 3 =",
    //     answer: "5",
    //     currentIndex: 71,
    //     nextIndex: 72,
    //     hints: ["-1 + (2 x 3) =", "-1 + 6 =", "5 ="]
    // },
    // {
    //     problem: "8 x -2 + 15 =",
    //     answer: "-1",
    //     currentIndex: 72,
    //     nextIndex: 73,
    //     hints: ["(8 x -2) + 15 =", "-16 + 15 =", "-1 ="]
    // },
    // {
    //     problem: "16 x 3 - 8 + 5 =",
    //     answer: "45",
    //     currentIndex: 73,
    //     nextIndex: 74,
    //     hints: ["(16 x 3) - 8 + 5 =", "48 - 8 + 5 =", "40 + 5 =", "45 ="]
    // },
    // {
    //     problem: "5 + 5 x 2 - 8 =",
    //     answer: "7",
    //     currentIndex: 74,
    //     nextIndex: 75,
    //     hints: ["5 + (5 x 2) - 8 =", "5 + 10 - 8 =", "15 - 8 =", "7 ="]
    // },
    // {
    //     problem: "13 + 22 x 3 =",
    //     answer: "79",
    //     currentIndex: 75,
    //     nextIndex: 76,
    //     hints: ["13 + (22 x 3) =", "13 + 66 =", "79 ="]
    // },
    // {
    //     problem: "60 - 37 x 2 =",
    //     answer: "-14",
    //     currentIndex: 76,
    //     nextIndex: 77,
    //     hints: ["60 - (37 x 2) =", "60 - 74 =", "-14 ="]
    // },
    // {
    //     problem: "6 + 66 / 2 =",
    //     answer: "39",
    //     currentIndex: 77,
    //     nextIndex: 78,
    //     hints: ["6 + (66 / 2) =", "6 + 33 =", "39 ="]
    // },
    // {
    //     problem: "15 - 3 x 8 =",
    //     answer: "-9 =",
    //     currentIndex: 78,
    //     nextIndex: 79,
    //     hints: ["15 - (3 x 8) =", "15 - 24 =", "-9 ="]
    // },
    // {
    //     problem: "13 - 7 x 11 =",
    //     answer: "-64",
    //     currentIndex: 79,
    //     nextIndex: 80,
    //     hints: ["13 - (7 x 11) =", "13 - 77 =", "-64 ="]
    // },
    // {
    //     problem: "5 + 8 + 12 x 4 =",
    //     answer: "61",
    //     currentIndex: 80,
    //     nextIndex: 81,
    //     hints: ["5 + 8 + (12 x 4) =", "5 + 8 + 48 =", "13 + 48 =", "61 ="]
    // },
    // {
    //     problem: "63 - 11 - 12 =",
    //     answer: "40",
    //     currentIndex: 81,
    //     nextIndex: 82,
    //     hints: ["52 - 12 =", "40 ="]
    // },
    // {
    //     problem: "70 - 13 - 42 =",
    //     answer: "15",
    //     currentIndex: 82,
    //     nextIndex: 83,
    //     hints: ["57 - 42 =", "15 ="]
    // },
    // {
    //     problem: "77 - 6 - 38 =",
    //     answer: "33",
    //     currentIndex: 83,
    //     nextIndex: 84,
    //     hints: ["71 - 38 =", "33 ="]
    // },
    // {
    //     problem: "121 - 41 - 3 =",
    //     answer: "77",
    //     currentIndex: 84,
    //     nextIndex: 85,
    //     hints: ["80 - 3 =", "77 ="]
    // },
    // {
    //     problem: "202 - 22 - 80 =",
    //     answer: "100",
    //     currentIndex: 85,
    //     nextIndex: 86,
    //     hints: ["180 - 80 =", "100 ="]
    // },
    // {
    //     problem: "98 - 59 - 5 =",
    //     answer: "34",
    //     currentIndex: 86,
    //     nextIndex: 87,
    //     hints: ["39 - 5 =", "34 ="]
    // },
    // {
    //     problem: "54 - 35 - 18 =",
    //     answer: "1",
    //     currentIndex: 87,
    //     nextIndex: 88,
    //     hints: ["19 - 18 =", "1 ="]
    // },
    // {
    //     problem: "154 - 67 - 2 =",
    //     answer: "85",
    //     currentIndex: 88,
    //     nextIndex: 89,
    //     hints: ["87 - 2 =", "85 ="]
    // },
    // {
    //     problem: "167 - 98 - 69 =",
    //     answer: "0",
    //     currentIndex: 89,
    //     nextIndex: 90,
    //     hints: ["69 - 69 =", "0 ="]
    // },
    // {
    //     problem: "333 - 231 - 7 =",
    //     answer: "95",
    //     currentIndex: 90,
    //     nextIndex: 91,
    //     hints: ["102 - 7 =", "95 ="]
    // },
    // {
    //     problem: "45 - 48 x 3 - 2 =",
    //     answer: "-101",
    //     currentIndex: 91,
    //     nextIndex: 92,
    //     hints: ["45 - (48 x 3) - 2 =", "45 - 144 - 2", "-99 - 2 =", "-101 ="]
    // },
    // {
    //     problem: "152 - 63 x 3 =",
    //     answer: "-37",
    //     currentIndex: 92,
    //     nextIndex: 93,
    //     hints: ["152 - (63 x 3) =", "152 - 189 =", "-37 ="]
    // },
    // {
    //     problem: "2 x 2 x 2 / 2 x 2 + 2 =",
    //     answer: "10",
    //     currentIndex: 93,
    //     nextIndex: 94,
    //     hints: ["(2 x 2 x 2) / 2 x 2 + 2 =", "8 / 2 x 2 + 2 =", "(8 / 2) x 2 + 2 =", "4 x 2 + 2 =", "(4 x 2) + 2 =", "8 + 2 =", "10 ="]
    // },
    // {
    //     problem: "3 x 3 x -3 + 3 x 3 =",
    //     answer: "-18",
    //     currentIndex: 94,
    //     nextIndex: 95,
    //     hints: ["(3 x 3 x -3) + 3 x 3 =", "-27 + 3 x 3 =", "-27 + (3 x 3) =", "-27 + 9 =", "-18 ="]
    // },
    // {
    //     problem: "77 x 3 - 8 + 5 =",
    //     answer: "228",
    //     currentIndex: 95,
    //     nextIndex: 96,
    //     hints: ["(77 x 3) - 8 + 5 =", "231 - 8 + 5 =", "223 + 5 ="]
    // },
    // {
    //     problem: "4 x 4 / 4 x 4 + 4 =",
    //     answer: "20",
    //     currentIndex: 96,
    //     nextIndex: 97,
    //     hints: ["(4 x 4) / 4 x 4 + 4 =", "16 / 4 x 4 + 4 =", "(16 / 4) x 4 + 4 =", "4 x 4 + 4 =", "(4 x 4) + 4 =", "16 + 4 =", "20 ="]
    // },
    // {
    //     problem: "15 x 3 + 40 x 3 =",
    //     answer: "165",
    //     currentIndex: 97,
    //     nextIndex: 98,
    //     hints: ["(15 x 3) + 40 x 3 =", "45 + 40 x 3 =", "45 + (40 x 3) =", "45 + 120 =", "165 ="]
    // },
    // {
    //     problem: "92 - 45 x 3 + 8 =",
    //     answer: "-35",
    //     currentIndex: 98,
    //     nextIndex: 99,
    //     hints: ["92 - (45 x 3) + 8 =", "92 - 135 + 8 =", "-43 + 8 =", "-35 ="]
    // },
    // {
    //     problem: "7 x 7 x 2 + 5 - 2 + 2 =",
    //     answer: "44",
    //     currentIndex: 99,
    //     nextIndex: -1,
    //     hints: ["(7 x 7 x 2) + 5 - 2 + 2", "(49 x 2) + 5 - 2 + 2 =", "98 + 5 - 2 + 2 =", "103 - 2 + 2 =", "101 + 2 =", "103 ="]
    // },
];