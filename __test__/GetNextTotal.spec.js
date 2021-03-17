const { GetNextTotal, GetNext2Total } = require("../js/GetNextTotals")


describe("", () => {
    test("it should get the second total", () => {
        const score = [
            { total: 1 },
            { total: 2 }
        ]

        const index = 0
        expect(GetNextTotal(index,score)).toBe(2)
    })
    test("it should get the next second total", () => {
        const score = [
            { total: 1 },
            { total: 2 },
            { total: 8 }
        ]

        const index = 0
        // const output = expect.any(Number)
        expect(GetNext2Total(index,score)).toBe(8)
    })
})
