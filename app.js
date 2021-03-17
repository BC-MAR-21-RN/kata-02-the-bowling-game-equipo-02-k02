const GeneRateRandom = require('./js/GenerateRandom')
const GetAdditionalData = require('./js/GetAdditionalData')
class BowlingGame {
    AddFrame() {
        this.shot1 = GeneRateRandom(10)
        this.shot2 = GeneRateRandom(10 - this.shot1)
        return {
            shot1: this.shot1,
            shot2: this.shot2,
            total: this.shot1 + this.shot2
        }

    }

    StarGame() {
        this.score = []
        for (let i = 0; i < 10; i++) {
            this.score = [...this.score, this.AddFrame()]
            this.score = GetAdditionalData(this.score)
        }
        console.table(this.score)

    }


}
let newBowling = new BowlingGame();
newBowling.StarGame();