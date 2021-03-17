const GetCumulativeTotal = require("../js/GetCumulativeTotal")


describe("", () => {
    test("it should get the prev points", () => {
        const score = [
            { points: 1 },
            { points: 2 }
        ]

        const index = 1
        // const output = expect.any(Number)
        expect(GetCumulativeTotal(score, index)).toBe(1)
    })
    test("it should get the prev points", () => {
        const score = [
            { points: 1 },
            {
                points: 2
            }
        ]

        const index = 0
        // const output = expect.any(Number)
        expect(GetCumulativeTotal(score, index)).toBe(0)
    })
})
