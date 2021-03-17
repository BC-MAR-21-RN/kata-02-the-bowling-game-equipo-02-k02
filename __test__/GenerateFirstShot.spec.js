const GetNextFirstShot = require("../js/GetFIrstShot.js")

describe("", () => {
    test("it should get the prev points", () => {
        const score = [
            { shot1: 1 },
            { shot1: 2 }
        ]

        const index = 0
        expect(GetNextFirstShot(score, index)).toBe(2)
    })
    test("it should get the prev points", () => {
        const score = [
            { shot1: 1 },
            { shot1: 2 }
        ]

        const index = 9
        // const output = expect.any(Number)
        expect(GetNextFirstShot(score, index)).toBe(0)
    })
})
