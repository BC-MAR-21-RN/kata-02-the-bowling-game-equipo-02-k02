const GeneRateRandom = require('./GenerateRandom')
function AddFrame() {
    this.shot1 = GeneRateRandom(10)
    this.shot2 = GeneRateRandom(10 - this.shot1)
    return {
        shot1: this.shot1,
        shot2: this.shot2,
        total: this.shot1 + this.shot2
    }

}

module.exports = AddFrame