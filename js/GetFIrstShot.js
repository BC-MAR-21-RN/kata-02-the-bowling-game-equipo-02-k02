function GetNextFirstShot(score, index) {
    if (index <= 8) {
        try {
            return score[index + 1].shot1
        } catch (error) {
            return "no exist"
        }
    }
    return 0
}
module.exports = GetNextFirstShot