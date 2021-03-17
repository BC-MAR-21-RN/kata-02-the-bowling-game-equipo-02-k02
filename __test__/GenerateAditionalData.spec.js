const GetAditionalData = require("../js/GetAdditionalData")

describe("", () => {
    test("it should get the second total", () => {
        const score = [
            { shot1: 9, shot2: 0, total: 9 },
            { shot1: 1, shot2: 1, total: 2 },
            { shot1: 2, shot2: 3, total: 5 },
            { shot1: 5, shot2: 2, total: 7 },
            { shot1: 3, shot2: 2, total: 5 },
            { shot1: 7, shot2: 0, total: 7 },
            { shot1: 3, shot2: 6, total: 9 },
            { shot1: 10, shot2: 0, total: 10 },
            { shot1: 7, shot2: 2, total: 9 },
            { shot1: 6, shot2: 1, total: 7 }
        ]

        const output = [
            { shot1: 9, shot2: 0, total: 9, points: 9 },
            { shot1: 1, shot2: 1, total: 2, points: 11 },
            { shot1: 2, shot2: 3, total: 5, points: 16 },
            { shot1: 5, shot2: 2, total: 7, points: 23 },
            { shot1: 3, shot2: 2, total: 5, points: 28 },
            { shot1: 7, shot2: 0, total: 7, points: 35 },
            { shot1: 3, shot2: 6, total: 9, points: 44 },
            { shot1: 10, shot2: 0, total: 10, points: 54 },
            { shot1: 7, shot2: 2, total: 9, points: 63 },
            { shot1: 6, shot2: 1, total: 7, points: 70 }
        ]
        expect(GetAditionalData(score)).toMatchObject(output)

    })
})
