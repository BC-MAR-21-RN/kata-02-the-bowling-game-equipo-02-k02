const GeneRateRandom = require("../js/GenerateRandom")

describe("",()=>{
    test("it should generate a random number", () => {

        const output = expect.any(Number)
        expect(GeneRateRandom()).toEqual(output)

    })
})