function GetCumulativeTotal(score,index) {
    if (index > 0) {
        try {
            return score[index - 1].points
        } catch (error) {
            return "no exist"
        }
    }
    else {

        return 0
    }
}
module.exports = GetCumulativeTotal