const GeneRateRandom = require("./GenerateRandom")
const GetCumulativeTotal = require("./GetCumulativeTotal")
const GetNextFirstShot = require("./GetFIrstShot")
const { GetNextTotal, GetNext2Total } = require("./GetNextTotals")


function GetAdditionalData(score) {
    this.score = score
    this.score.map((item, index) => {

        const addition = GetNextFirstShot(this.score,index)
        const cumulative = GetCumulativeTotal(this.score,index)
        const nextTot = GetNextTotal()
        const next2Tot = GetNext2Total()


        if (item.shot1 === 10) {
            if (nextTot === "no exist" || next2Tot === "no exist" || cumulative === "no exist") {
                return item.points = ""
            }
            if (index < 9) {

                return item.points = cumulative + item.total + nextTot + next2Tot
            }
            return item.points = cumulative + item.total + GeneRateRandom(10) + GeneRateRandom(10)
        }
        else if (item.total === 10 || item.shot2 === 10) {
            if (addition === "no exist" || cumulative === "no exist") {
                return item.points = ""
            }
            return item.points = cumulative + item.total + addition
        }
        else {
            if (cumulative === "no exist") {
                return item.points = ""
            }
            return item.points = cumulative + item.total
        }


    })


    return this.score
}
module.exports = GetAdditionalData