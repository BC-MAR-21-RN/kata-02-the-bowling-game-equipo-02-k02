const AddFrame = require("../js/AddFrame")

describe("", () => {
    test("it should generate random rolls", () => {

        const output = {
            shot1: expect.any(Number),
            shot2: expect.any(Number),
            total: expect.any(Number)
        }
        expect(AddFrame()).toMatchObject(output)

    })
})