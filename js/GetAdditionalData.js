const GeneRateRandom = require("./GenerateRandom")


function GetAdditionalData(score) {
    this.score = score
    this.score.map((item, index) => {

        const cumulativeTotal = () => {
            if (index > 0) {
                try {
                    return this.score[index - 1].points
                } catch (error) {
                    return "no exist"
                }
            }
            else {

                return 0
            }
        }

        const nextFirstShot = () => {
            if (index <= 8) {
                try {
                    return this.score[index + 1].shot1
                } catch (error) {
                    return "no exist"
                }
            }
            return 0
        }

        const nextTotal = () => {
            if (index <= 8) {
                try {
                    return this.score[index + 1].total
                } catch (error) {
                    return "no exist"
                }
            }
            return 0
        }
        const next2Total = () => {
            if (index <= 7) {
                try {
                    return this.score[index + 2].total
                } catch (error) {
                    return "no exist"
                }
            }
            return 0
        }

        const addition = nextFirstShot()
        const cumulative = cumulativeTotal()
        const nextTot = nextTotal()
        const next2Tot = next2Total()


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