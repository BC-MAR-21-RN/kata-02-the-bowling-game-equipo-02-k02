
function GetNextTotal(index, score) {
    if (index <= 8) {
        try {
            return score[index + 1].total
        } catch (error) {
            return "no exist"
        }
    }
    return 0
}
function GetNext2Total(index, score) {
    if (index <= 7) {
        try {
            return score[index + 2].total
        } catch (error) {
            return "no exist"
        }
    }
    return 0
}



module.exports = {
    GetNextTotal,
    GetNext2Total
}